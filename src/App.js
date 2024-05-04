import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import React, { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";
import Search from "./pages/Search";
import TopArtists from "./pages/TopArtists";
import TopTracks from "./pages/TopTracks";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import BodySkeleton from "./components/common/BodySkeleton";
import LoginButton from "./pages/LoginButton";
import { useInView, defaultFallbackInView } from "react-intersection-observer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [colourHolder, setColourHolder] = useState("");
  const [playlistNameHolder, setPlaylistNameHolder] = useState();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token)

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.searchPlaylists("popular%20playlists", ["playlists"]).then((search) => {
        dispatch({
          type: "SET_SEARCH",
          search: search,
        });
      });

      spotify.searchPlaylists("most%20streamed%20playlists", ["playlists"]).then((search) => {
        dispatch({
          type: "SET_HOME",
          home: search,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      });

      spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getPlaylist("37i9dQZF1DX18jTM2l2fJY").then((response) => {
        dispatch({
          type: "SET_TOP_TRACKS",
          top_tracks: response,
        });
      });

      spotify.getMySavedTracks({ limit : 20, offset: 1 }).then((response) => {
        dispatch({
          type: "SET_FAVE_TRACKS",
          fave_tracks: response,
        });
      });

      // spotify.getPlaylist().then((response) => {
      //   dispatch({
      //     type: "SET_PLAYLIST",
      //     playlist: response,
      //   });
      // });

      spotify.getArtists(
        ["06HL4z0CvFAxyc27GXpf02",
        "3TVXtAsR1Inumwj472S9r4",
        "6eUKZXaKkcviH0Ku9w2n3V",
        "1Xyo4u8uXC1ZmMpatF05PJ",
        "5K4W6rqBFWDnAN6FQUkS6x",
        "7dGJo4pcD2V6oG8kP0tJRR",
        "5pKCCKE2ajJHZ9KAiaK11H",
        "7Ln80lUS6He07XvHI8qqHH",
        "7tYKF4w9nC0nq9CsPZTHyP",
        "00FQb4jTyendYWaN8pK0wa"]
        ).then((response) =>
          dispatch({
            type: "SET_TOP_ARTISTS",
            top_artists: response,
          })
        );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      fetch(spotify)
        .then((res) => {
          setData(res);
          setLoading(true);
        })
        .catch((err) => console.log("Something went wrong", err));
    }, 500);
  }, []);

  const { ref: playlistNavRef, inView: playlistNavInView } = useInView({
    threshold: 0.01,
    initialInView: true,
  });

  const { ref: generalNavRef, inView: generalNavInView } = useInView({
    threshold: 0.01,
    initialInView: true,
  });

  const { ref: searchNavRef, inView: searchNavInView } = useInView({
    threshold: 0.01,
    initialInView: true,
  });

  const colourData = (colour) => {
    return setColourHolder(colour)
  }

  const playlistName = (name) => {
    return setPlaylistNameHolder(name)
  }

  return (
    <div className="App">

      {!token ? (
        <LoginButton />
      ) : (
        <div className="app--container">
          <div className="app--body">
            <Sidebar />
            <Navbar spotify={spotify} token={token} inView={playlistNavInView} generalInView={generalNavInView} searchInView={searchNavInView} passColourData={colourHolder} passPlaylistName={playlistNameHolder}/>

            { loading ?
              (<Routes>
                <Route path="/" element={<Main refObj={generalNavRef} spotify={spotify}/>}/>
                <Route path="/login" element={<LoginButton refObj={generalNavRef}/>}/>
                <Route path="/search" element={<Search refObj={searchNavRef} spotify={spotify}/>}/>
                <Route path="/top-artists" element={<TopArtists spotify={spotify}/>}/>
                <Route path="/top-tracks" element={<TopTracks refObj={generalNavRef} spotify={spotify}/>}/>
                <Route path="/playlists/:id" element={<Playlist refObj={playlistNavRef} colourData={colourData} playlistName={playlistName} spotify={spotify}/>}/>
                <Route path="/playlists" element={<Library refObj={generalNavRef} spotify={spotify}/>}/>
                <Route path="*" element={<NoMatch spotify={spotify}/>}/>
              </Routes>)
              : <BodySkeleton /> }

          </div>
          <Footer spotify={spotify}/>
        </div>
      )}
    </div>
  );
}
export default App;
