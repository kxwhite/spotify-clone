import "../styles/Main.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import React from "react";
// import BodySkeleton from "../components/common/BodySkeleton";
import Playlist from "./Playlist";
import Search from "./Search";
import TopArtists from "./TopArtists";

function Main({spotify, token, setToken}) {
  return (
    <div className="main--container">
      <div className="main--body">
        <Sidebar />
        <Navbar spotify={spotify} token={token} setToken={setToken}/>
        {/* <BodySkeleton /> */}
        {/* <Search spotify={spotify}/> */}
        {/* <Playlist spotify={spotify} /> */}
        <TopArtists spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
    </div>
  );
}
export default Main;
