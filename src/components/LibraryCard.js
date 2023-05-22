import React from 'react'
import './LibraryCard.css'

function LibraryCard({img, title, name}) {

  const titleLength = (title) => {
    if (title.length > 17) {
      return title.substring(0,16) + "...";
    } else {
      return title
    }
  }

  return (
    <div className="library-card--body">
      <img className="library-card--img" src={img} alt="" />
      <div className="library-card--txt-container">
        <strong className="library-card--name">{titleLength(title)}</strong>
        <p className="library-card--txt">By {name}</p>
      </div>
    </div>
  );
}

export default LibraryCard
