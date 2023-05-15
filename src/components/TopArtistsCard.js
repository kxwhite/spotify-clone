import React from 'react'
import './TopArtistsCard.css'
import image from '../assets/footer_assets/Mac_Miller_-_Swimming.png'

function TopArtistsCard({img, name}) {
  return (
    <div className="top-artists-card--body">
      <img className="top-artists-card--img" src={img} alt="" />
      <div className="top-artists-card--txt-container">
        <strong className="top-artists-card--name">{name}</strong>
        <p className="top-artists-card--txt">Artist</p>
      </div>
    </div>
    // <div className="top-artists-card--body">
    //   <img className="top-artists-card--img" src={image} alt="" />
    //   <div className="top-artists-card--txt-container">
    //     <strong className="top-artists-card--name">Mac Miller</strong>
    //     <p className="top-artists-card--txt">Artist</p>
    //   </div>
    // </div>
  );
}

export default TopArtistsCard
