import "./App.css";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import React, { useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";
import Search from "./pages/Search";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

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
        // console.log("User =>", user);
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        console.log("App Playlists => ", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })
      .catch((err) => console.log("Playlist Error => ", err));

      spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
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
    // console.log('Token Test => ', token);
  }, [token, dispatch])


  return (
    <div className="App">
      { token ? <Main spotify={spotify} /> : <Login />}

      {/* <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div> */}

      {/* {!token ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/top-artists">
              <h1>Top Artists</h1>
            </Route>
            <Route path="/top-tracks">
              <h1>Top Tracks</h1>
            </Route>
            <Route path="/playlists/:id"> */}
              {/* Looks same as discovery page */}
              {/* <h1>Playlist</h1>
            </Route>
            <Route path="/playlists"> */}
              {/* This will be 'Your Library' tab */}
              {/* shows playlists as cards */}
              {/* <h1>Playlists</h1>
            </Route>
            <Route path="/"> */}
                {/* Main will be the home page */}
                {/* <Main />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
          </Switch>
        </Router>
      )} */}
    </div>
  );
}
export default App;
