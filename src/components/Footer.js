import React, { useEffect } from 'react'
import './Footer.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import NotesIcon from "@mui/icons-material/Notes";
import DevicesIcon from "@mui/icons-material/Devices";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
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
  const [{ token, item, playing, progress }, dispatch] = useStateProviderValue();

  const theme = useTheme();

  const duration = item?.duration_ms;
  const [position, setPosition] = React.useState(progress);

  const [shuffleState, setShuffleState] = React.useState(true);
  const [faveTrack, setFaveTrack] = React.useState(false);

  const [clickCount, setClickCount] = React.useState(0);
  const [repeatState, setRepeatState] = React.useState(false);
  const [repeatStack, setRepeatStack] = React.useState([
    {icon: RepeatIcon, color: "#A4A4A4" },
    {icon: RepeatIcon, color: "#1BD860" },
    {icon: RepeatOneIcon, color: "#1BD860" }
  ]);

  function formatDuration(value) {
    if (isNaN(value) || value < 0) {
      return "0:00";
    }

    const seconds = Math.floor(value / 1000);
    const minute = Math.floor(seconds / 60);
    const formattedSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minute}:${formattedSeconds}`;
  }

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

    const updatePosition = () => {
      spotify.getMyCurrentPlaybackState().then((r) => {
        dispatch({
          type: "SET_PROGRESS",
          progress: r.progress_ms,
        });

        setPosition(r.progress_ms);
      });
    };
    updatePosition();

    const intervalId = setInterval(updatePosition, 1000);
    return () => clearInterval(intervalId);

  }, []);


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


  const repeatTrack = () => {
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
      setClickCount((prevCount) => prevCount + 1);

      if (clickCount === 0) {
        spotify.setRepeat("off");
        setRepeatState(true);
        setRepeatStack((prevStack) => ({
          ...prevStack,
          icon: RepeatIcon,
          color: "#A4A4A4",
        }));
      } else if (clickCount === 1) {
        spotify.setRepeat("track");
        setRepeatStack((prevStack) => ({
          ...prevStack,
          icon: RepeatIcon,
          color: "#1BD860",
        }));
      } else if (clickCount === 2) {
        spotify.setRepeat("context");
        setRepeatState(false);
        setRepeatStack((prevStack) => ({
          ...prevStack,
          icon: RepeatOneIcon,
          color: "#1BD860",
        }));
        setClickCount(0);
      }
      console.log("ClickCount =>", clickCount);
    });
  };

  const { icon: IconComponent, color } = repeatStack[clickCount];

  const shuffleTrack = () => {
    spotify.setShuffle(shuffleState);
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
      setShuffleState(!shuffleState);
    });
  };

  // const handleFavouriteTrack = ([id]) => {
  //   if (faveTrack) {
  //     spotify.removeFromMySavedTracks(id);
  //     spotify.getMyCurrentPlayingTrack().then((r) => {
  //       dispatch({
  //         type: "SET_FAVE_TRACKS",
  //         fave_tracks: r.item,
  //       });
  //     });
  //     setFaveTrack(!faveTrack);
  //     console.log("Item ID =>", item?.id);
  //     console.log("TypeOf Item ID =>", typeof item?.id);
  //   } else {
  //     spotify.addToMySavedTracks(id);
  //     spotify.getMyCurrentPlayingTrack().then((r) => {
  //       dispatch({
  //         type: "SET_FAVE_TRACKS",
  //         fave_tracks: r.item,
  //       });
  //     });
  //     setFaveTrack(!faveTrack);
  //     console.log("Item ID =>", item?.id);
  //     console.log("TypeOf Item ID =>", typeof item?.id);
  //   }
  // };

  const addFavouriteTrack = (id) => {
    spotify.addToMySavedTracks(id).then(() => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_FAVE_TRACKS",
          fave_tracks: r.item,
        });
        setFaveTrack(!faveTrack);
      });
    });
  };

  // const removeFavouriteTrack = (id) => {
  //   spotify
  //     .containsMySavedTracks([id])
  //     .then((r) => {
  //       const trackIsInSavedMusic = r.body[0];
  //       console.log("Body => " + r.body);

  //       if (trackIsInSavedMusic) {
  //         console.log("Track was found in the user's Your Music library");
  //         spotify.removeFromMySavedTracks(id).then(() => {
  //           spotify.getMyCurrentPlayingTrack().then((r) => {
  //             dispatch({
  //               type: "SET_FAVE_TRACKS",
  //               fave_tracks: r.item,
  //             });
  //             setFaveTrack(!faveTrack);
  //           });
  //         });
  //       } else {
  //         console.log("Track was not found.");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Something went wrong!", err);
  //     });
  // };

  const seekPosition = (positionMs) => {
    spotify.seek(positionMs).then((r) => {
      dispatch({
        type: "SET_PROGRESS",
        progress: r.progress_ms,
      });

      setPosition(positionMs.progress_ms);
    });
  };

  const [sliderVolumeVal, setSliderVolumeVal] = React.useState(30);

  const handleVolumeChange = (event, newValue) => {
    spotify.setVolume(newValue);
    setSliderVolumeVal(newValue);
  };

  return (
    <div className="footer--main">
      <div className="footer--album-container">
        <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className="footer--album"
        />
        {item ? (
          <div className="footer--artist-info">
            <strong className="footer--song-name">{item?.name}</strong>
            <p className="footer--artist-name">
              {item.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        ) : (
          <div className="footer--artist-info">
            <strong className="footer--song-name">No song is playing</strong>
            <p className="footer--artist-name">...</p>
          </div>
        )}
        <FavoriteBorderOutlinedIcon
          onClick={() => addFavouriteTrack(item?.id)}
          sx={{ color: "#767676", fontSize: 16 }}
          className="footer--icon-style"
        />
        {/* {!faveTrack ? (
          <FavoriteBorderOutlinedIcon
            onClick={() => handleFavouriteTrack(item?.id)}
            sx={{ color: "#767676", fontSize: 16 }}
            className="footer--icon-style"
          />
        ) : (
          <FavoriteIcon
            onClick={() => handleFavouriteTrack(item?.id)}
            sx={{ color: "whitesmoke", fontSize: 16 }}
            className="footer--icon-style"
          />
        )} */}
      </div>

      <div className="footer--controls">
        <div className="footer--controls-icons">
          <ShuffleIcon
            onClick={shuffleTrack}
            fontSize="small"
            sx={{ color: `${!shuffleState ? "#1BD860" : "#A4A4A4"}` }}
            className="footer--icon-style"
          />
          <SkipPreviousIcon
            onClick={skipPrevious}
            fontSize="small"
            sx={{ color: "#A4A4A4" }}
            className="footer--icon-style"
          />
          {!playing ? (
            <PlayCircleIcon
              onClick={handlePlayPause}
              fontSize="large"
              sx={{ color: "white" }}
              className="footer--play-btn"
            />
          ) : (
            <PauseCircleIcon
              onClick={handlePlayPause}
              fontSize="large"
              sx={{ color: "white" }}
              className="footer--play-btn"
            />
          )}
          <SkipNextIcon
            onClick={skipNext}
            fontSize="small"
            sx={{ color: "#A4A4A4" }}
            className="footer--icon-style"
          />
          <IconComponent
            onClick={repeatTrack}
            fontSize="small"
            sx={{ color: color }}
            className="footer--icon-style"
          />
        </div>
        <div className="footer--duration-slider">
          <TinyText>{formatDuration(position)}</TinyText>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1000}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            onChangeCommitted={(_, value) => seekPosition(value)}
            sx={{
              color:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#A4A4A4",
              height: 4,
              marginInline: 1,
              "& .MuiSlider-track": {
                border: "none",
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                  backgroundColor: "#1BD860",
                },
              },
              "& .MuiSlider-thumb": {
                display: "none",
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <TinyText>{formatDuration(duration)}</TinyText>
        </div>
      </div>

      <div className="footer--volume-controls">
        <NotesIcon
          sx={{ color: "#767676", fontSize: 16 }}
          className="footer--icon-style"
        />
        <DevicesIcon
          sx={{ color: "#767676", fontSize: 16 }}
          className="footer--icon-style"
        />
        <VolumeDown
          sx={{ color: "#767676", fontSize: 16 }}
          className="footer--icon-style footer--volume"
        />
        <Slider
          aria-label="Volume"
          value={sliderVolumeVal}
          defaultValue={30}
          onChange={handleVolumeChange}
          sx={{
            color:
              theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#A4A4A4",
            "& .MuiSlider-track": {
              border: "none",
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                backgroundColor: "#1BD860",
              },
            },
            "& .MuiSlider-thumb": {
              display: "none",
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUp
          sx={{ color: "#767676", fontSize: 16 }}
          className="footer--icon-style footer--volume"
        />
        <OpenInFullIcon
          sx={{ color: "#767676", fontSize: 16 }}
          className="footer--icon-style"
        />
      </div>
    </div>
  );
}

export default Footer
