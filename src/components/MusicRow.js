import React, { useState } from 'react'
import './MusicRow.css'
import img from "../assets/footer_assets/Mac_Miller_-_Swimming.png";
import { DownloadForOffline, FavoriteBorderOutlined, MoreHoriz, PlayArrow } from "@mui/icons-material";


const MusicRow = ({i, id, title, artist, album, date, duration}) => {
  // const [rowIndex, setRowIndex] = useState(null);

  // const [hoveredRow, setHoveredRow] = useState(-1);

  // const showRowHandler = (i)=>{
  //     setHoveredRow(i);
  // }

  // const hideRowHandler=()=>{
  //       setHoveredRow(-1)
  // }

  // const [view, setView] = useState('');
  // const handleMouseEnter = () => setView('view');
  // const handleMouseLeave = () => setView('');

  // const [hover, setHover] = useState(false);

  // const handleMouseEnter = () => {
    //   setHover(true);
    // };

    // const handleMouseLeave = () => {
      //   setHover(false);
      // };

  // const [hover, setHover] = useState(-1);
  // const showHandler = (i) => {
  //   setHover(i);
  // };

  // const hideHandler = () => {
  //   setHover(-1);
  // };

  // const inboxItemStyle = ({ hover }) => ({
  //   backgroundColor: hover ? "#292A2D" : null,
  //   borderRadius: hover ? '4px' : null,
  //   padding: hover ? '10px' : null
  // });

  const [isHovering, setIsHovering] = useState(-1);

  return (
    <div
      // className={`musicrow--container`}
      // className={`musicrow--container ${inboxItemStyle({hover})}`}
    // onMouseOver={() => setRowIndex(rowIndex => rowIndex === id ? null : id)}
    // onMouseLeave={hideRowHandler}
    // onMouseEnter={()=>showRowHandler(i)}
    // className={hoveredRow === id ? `musicrow--container  musicrow--container-hover` : `musicrow--container`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // style={{
      //   backgroundColor: hover ? '#292A2D' : null,
      //   borderRadius: hover ? '4px' : null,
      //   padding: hover ? '10px' : null
      //   }}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
        // onMouseLeave={hideHandler}
        // onMouseEnter={()=>showHandler(i)}
        className={`musicrow--container ${isHovering === i ? "musicrow--container-hover" : ""}`}
        onMouseEnter={() => setIsHovering(i)} onMouseLeave={() => setIsHovering(-1)}
    >
      <div className="musicrow--first">
        <PlayArrow sx={{ color: '#A4A4A4', fontSize: 18}} className='musicrow--play-icon'/>
        <p className="musicrow--id">{id}</p>
        <div className="musicrow--title-container">
          <img src={img} alt="Album Cover" className="musicrow--img" />
          <div className="musicrow--info">
            <p className="musicrow--title">{title}</p>
            <div className="musicrow--artist-container">
              <DownloadForOffline sx={{ fontSize: '18px', color: '#A4A4A4' }} className="musicrow--downarrow-btn"/>
              <p className="musicrow--artist">{artist}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="musicrow--album">{album}</p>
      <p className="musicrow--date">{date}</p> */}
      <div className="musicrow--duration-container">
        <FavoriteBorderOutlined sx={{ color: '#767676', fontSize: 18}} className='musicrow--fav-icon'/>
        <p className="musicrow--duration">{duration}</p>
        <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="musicrow--more-icon"/>
      </div>
    </div>
  );
}

export default MusicRow
