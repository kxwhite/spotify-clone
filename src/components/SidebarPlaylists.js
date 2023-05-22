import React from "react";
import "./SidebarPlaylists.css";
import { useParams } from "react-router";

function SidebarPlaylists({ title }) {

  return (
    <div className="sidebar--personal-playlist">
      <p>{title}</p>
    </div>
  );
}

export default SidebarPlaylists;
