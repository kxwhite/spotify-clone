import React from "react";
import "./SidebarPlaylists.css";

function SidebarPlaylists({ title = "test" }) {
  return (
    <div className="sidebar--personal-playlist">
      <p>{title}</p>
    </div>
  );
}

export default SidebarPlaylists;
