import React from 'react'
import "./SearchCard.css"

function SearchCard({img, title, bgColour}) {

  return (
    <div className="search-card--body" style={{ backgroundColor: bgColour}}>
      <h2 className="search-card--txt">{title}</h2>
      <div className="search-card--img-container">
        <img
          className="search-card--img"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default SearchCard
