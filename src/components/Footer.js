import React, { useEffect } from 'react'
import './Footer.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import NotesIcon from "@mui/icons-material/Notes";
import DevicesIcon from "@mui/icons-material/Devices";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Slider, styled, Typography, useTheme } from '@mui/material';
import { useStateProviderValue } from '../StateProvider';


const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: 'whitesmoke',
});

function Footer({ spotify }) {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const [{ token, item, playing }, dispatch] = useStateProviderValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className='footer--main'>

      <div className="footer--album-container">
        <img src={item?.album.images[0].url} alt={item?.name} className='footer--album'/>
        {item ?
        (<div className='footer--artist-info'>
          <strong className='footer--song-name'>{item?.name}</strong>
          <p className='footer--artist-name'>{item.artists.map((artist) => artist.name).join(", ")}</p>
        </div>)
        :
        (<div className='footer--artist-info'>
          <strong className='footer--song-name'>No song is playing</strong>
          <p className='footer--artist-name'>...</p>
        </div>)}
        <FavoriteBorderOutlinedIcon sx={{ color: '#767676', fontSize: 16}} className='footer--icon-style'/>
      </div>

      <div className="footer--controls">
        <div className="footer--controls-icons">
          <ShuffleIcon fontSize='small' sx={{ color: '#A4A4A4' }} className="footer--icon-style"/>
          <SkipPreviousIcon onClick={skipNext} fontSize='small' sx={{ color: '#A4A4A4' }} className="footer--icon-style"/>
          {playing ?
          <PlayCircleIcon onClick={handlePlayPause} fontSize='large' sx={{ color: 'white' }} className="footer--play-btn"/>
          :
          <PlayCircleIcon onClick={handlePlayPause} fontSize='large' sx={{ color: 'white' }} className="footer--play-btn"/>
          }
          <SkipNextIcon onClick={skipPrevious} fontSize='small' sx={{ color: '#A4A4A4' }} className="footer--icon-style"/>
          <RepeatIcon fontSize='small' sx={{ color: '#A4A4A4' }} className="footer--icon-style"/>
        </div>
        <div className="footer--duration-slider">
          <TinyText>{formatDuration(position)}</TinyText>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#A4A4A4',
              height: 4,
              marginInline: 1,
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                display: 'none',
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </div>
      </div>

      <div className="footer--volume-controls">
        <NotesIcon sx={{ color: '#767676', fontSize: 16 }} className="footer--icon-style"/>
        <DevicesIcon sx={{ color: '#767676', fontSize: 16 }} className="footer--icon-style"/>
          <VolumeDown sx={{ color: '#767676', fontSize: 16 }} className="footer--icon-style footer--volume"/>
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#A4A4A4',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                display: 'none',
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUp sx={{ color: '#767676', fontSize: 16 }} className="footer--icon-style footer--volume"/>
        <OpenInFullIcon sx={{ color: '#767676', fontSize: 16 }} className="footer--icon-style"/>
      </div>
    </div>
  )
}

export default Footer
