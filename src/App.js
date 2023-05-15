import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import React, { useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";
import Search from "./pages/Search";
import TopArtists from "./pages/TopArtists";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  // const popularArtists = [
  //   "06HL4z0CvFAxyc27GXpf02",
  //   "3TVXtAsR1Inumwj472S9r4",
  //   "6eUKZXaKkcviH0Ku9w2n3V",
  //   "1Xyo4u8uXC1ZmMpatF05PJ",
  //   "5K4W6rqBFWDnAN6FQUkS6x",
  //   "7dGJo4pcD2V6oG8kP0tJRR",
  //   "5pKCCKE2ajJHZ9KAiaK11H",
  //   "7Ln80lUS6He07XvHI8qqHH",
  //   "7tYKF4w9nC0nq9CsPZTHyP",
  //   "00FQb4jTyendYWaN8pK0wa",
  // ];

  // const popularArtists = [
  //   "06HL4z0CvFAxyc27GXpf02,3TVXtAsR1Inumwj472S9r4,6eUKZXaKkcviH0Ku9w2n3V,1Xyo4u8uXC1ZmMpatF05PJ,5K4W6rqBFWDnAN6FQUkS6x,7dGJo4pcD2V6oG8kP0tJRR,5pKCCKE2ajJHZ9KAiaK11H,7Ln80lUS6He07XvHI8qqHH,7tYKF4w9nC0nq9CsPZTHyP,00FQb4jTyendYWaN8pK0wa"
  // ];

  const popularArtists = "06HL4z0CvFAxyc27GXpf02,3TVXtAsR1Inumwj472S9r4,6eUKZXaKkcviH0Ku9w2n3V,1Xyo4u8uXC1ZmMpatF05PJ,5K4W6rqBFWDnAN6FQUkS6x,7dGJo4pcD2V6oG8kP0tJRR,5pKCCKE2ajJHZ9KAiaK11H,7Ln80lUS6He07XvHI8qqHH,7tYKF4w9nC0nq9CsPZTHyP,00FQb4jTyendYWaN8pK0wa"
;

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

      spotify.getPlaylist().then((response) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: response,
        });
      });

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
  }, [])


  return (
    <div className="App">

      {!token ? (
        <Login />
      ) : (
        <Routes>
            {/* Main will be the home page */}
            <Route path="/" element={<Main spotify={spotify}/>}/>
            <Route path="/signup" element={<SignUp spotify={spotify}/>}/>
            <Route path="/search" element={<Search spotify={spotify}/>}/>
            <Route path="/top-artists" element={<TopArtists spotify={spotify}/>}/>
            <Route path="/top-tracks" element={<h1>Top Tracks</h1>}/>
            {/* Looks same as discovery page */}
            <Route path="/playlists/:id" element={<h1>Playlist</h1>}/>
            {/* This will be 'Your Library' tab */}
            {/* shows playlists as cards */}
            <Route path="/playlists" element={<h1>Playlists</h1>}/>
            <Route path="*" element={<NoMatch spotify={spotify}/>}/>
        </Routes>
      )}
    </div>
  );
}
export default App;
