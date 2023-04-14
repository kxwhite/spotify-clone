import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import React, { useState } from "react";

function App() {
  const CLIENT_ID = "d4005cdf0ab146dbb9f266171843ed64";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Main CLIENT_ID={CLIENT_ID} REDIRECT_URI={REDIRECT_URI} AUTH_ENDPOINT={AUTH_ENDPOINT} RESPONSE_TYPE={RESPONSE_TYPE} token={token} setToken={setToken}/>} />
          <Route path="/login" element={<Login CLIENT_ID={CLIENT_ID} REDIRECT_URI={REDIRECT_URI} AUTH_ENDPOINT={AUTH_ENDPOINT} RESPONSE_TYPE={RESPONSE_TYPE} token={token} setToken={setToken}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
