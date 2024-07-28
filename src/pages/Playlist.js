import React, { useEffect, useState } from 'react'
import '../styles/Playlist.css';
import '../components/Banner.css';
import { PlayCircle, DownloadForOffline, MoreHoriz, Search, AccessTime } from "@mui/icons-material";
import MusicRow from '../components/MusicRow';
import { useStateProviderValue } from '../StateProvider';
import RecentlyPlayed from '../components/common/RecentlyPlayed';
import { Avatar } from "@mui/material";
import logo from "../assets/banner_assets/Spotify_logo.svg.webp";
import { useParams } from 'react-router';
import ColorThief from "colorthief";
import tinycolor from 'tinycolor2';
import BodySkeleton from '../components/common/BodySkeleton';

function Playlist({spotify, refObj, colourData, playlistName}) {

  const [{ token }, dispatch] = useStateProviderValue();

  const { id } = useParams();

  const [playlistState, setPlaylistState] = useState({});
  const [tracks, setTracks] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [secondBackgroundColor, setSecondBackgroundColor] = useState("");
  const [thirdBackgroundColor, setThirdBackgroundColor] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchGeneratedImage = async () => {
      try {
        spotify.setAccessToken(token);
        const response = await spotify.getPlaylist(id);
        setPlaylistState({
          id: response?.id,
          img: response?.images[0].url,
          name: response?.name,
          description: response?.description,
          display_name: response?.owner.display_name,
          total: response?.tracks.total,
        });
        console.log("Info Response =>", response);
        setTracks(response?.tracks.items);
        console.log("Tracks Response =>", tracks);

        const dominantColor = await extractDominantColor(
          response?.images[0].url
        );
        setBackgroundColor(dominantColor);

        const secondColor = calculateSecondColor(dominantColor);
        setSecondBackgroundColor(secondColor);

        const thirdColor = calculateThirdColor(dominantColor);
        setThirdBackgroundColor(thirdColor);
      } catch (error) {
        console.error("Error fetching/generated image:", error);
      }
    };

    fetchGeneratedImage();
  }, [token, id]);

  const extractDominantColor = async (image) => {
    try {
      const colorThief = new ColorThief();
      const dominantColor = await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = image;
        img.addEventListener("load", () => {
          const [r, g, b] = colorThief.getColor(img);
          const hexColor = `#${((r << 16) | (g << 8) | b)
            .toString(16)
            .padStart(6, "0")}`;
          resolve(hexColor);
        });
        img.addEventListener("error", reject);
      });
      return dominantColor;
    } catch (error) {
      console.error("Error extracting dominant color:", error);
      return "#4b5279";
    }
  };

  const calculateSecondColor = (color) => {
    const darkerFactor = 0.3;
    const colorObj = tinycolor(color);
    const darkerColor = colorObj.darken(darkerFactor * 100).toString();
    return darkerColor;
  };

  const calculateThirdColor = (color) => {
    const darkerFactor = 0.4;
    const colorObj = tinycolor(color);
    const darkerColor = colorObj.darken(darkerFactor * 100).toString();
    return darkerColor;
  };


  const showHandler = () => {
    setShow(!show);
  };

  const playPlaylist = (id) => {
  spotify
  .play({
      // context_uri: `spotify:playlist:37i9dQZEVXcQ9COmYvdajy`,
      context_uri: `spotify:playlist:${id}`,
    })
    .then((res) => {
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
    });
  };

  const playSong = (id) => {
  spotify
  .play({
      uris: [`spotify:track:${id}`],
    })
    .then((res) => {
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
    });
  };

  const titleLength = (title) => {
    if (title.length > 10) {
      return title.substring(0, 16) + "...";
    } else {
      return title;
    }
  };

  colourData(thirdBackgroundColor)
  playlistName(playlistState?.name);

  useEffect(() => {
    setTimeout(() => {
      fetch(spotify)
        .then((res) => {
          setData(res);
          setLoading(true);
        })
        .catch((err) => console.log("Something went wrong", err));
    }, 500);
  }, []);

  let includesATag = playlistState?.description?.includes("</a>");

  return (
    <>
      { loading ?
        (<div className="playlist--body">
          <div ref={refObj} className="banner--top-section" style={{ background: `linear-gradient(180deg, ${backgroundColor} 0%, ${secondBackgroundColor} 100%)` }}>
            <img
              src={playlistState?.img}
              alt="Album"
              className="banner--main-album"
            />
            <div className="banner--top-subsection">
              <p className="banner--caption">Playlist</p>
              <h1 className="banner--title">
                {titleLength(String(playlistState?.name))}
              </h1>
              <div className="banner--info">
                <p className="banner--para">{!includesATag && playlistState?.description}</p>
                <div className="banner--user-section">
                  <Avatar
                    alt={playlistState?.name}
                    src={logo}
                    sx={{ width: 30, height: 30 }}
                    className="nav--avatar"
                  />
                  <p className="banner--user-name">
                    <strong>{playlistState?.display_name}</strong>
                  </p>
                  <p className="banner--user-info">&nbsp;• 165,020 Likes •</p>
                  <p className="banner--user-info">
                    &nbsp;{playlistState?.total} songs •&nbsp;
                  </p>
                  <p className="banner--duration"> 2 hr 45 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="playlist--bottom-section" style={{ background: `linear-gradient(180deg, ${thirdBackgroundColor} 0%, rgba(18, 18, 18, 1) 15%)` }}>
            <div className="playlist--play-nav">
              <div className="playlist--play-nav-left">
                <PlayCircle onClick={() => playPlaylist(playlistState?.id)} sx={{ fontSize: "60px", color: "#1EB954" }} className="playlist--play-btn"/>
                <DownloadForOffline sx={{ fontSize: "30px", color: "#1EB954" }} className="playlist--downarrow-btn"/>
                <MoreHoriz sx={{ fontSize: "20px", color: "#767676" }} className="playlist--more-btn"/>
              </div>
              <div className="playlist--play-nav-right">
                <div className="playlist--search-cont">
                  {show ? (<input className="playlist--search-input" type="text" style={{ marginRight: "10px" }} placeholder="Search for playlists or songs"/>) : null}
                  <Search sx={{ fontSize: "20px", color: "#A4A4A4", opacity: "0.6" }} onClick={showHandler} className="playlist--more-btn playlist--search-icon"/>
                </div>
                <div className="playlist--recent-container">
                  <RecentlyPlayed className="nav--menu" />
                </div>
              </div>
            </div>
            <div className="playlist--table">
              <div className="playlist--table-head">
                <div className="playlist--table-first">
                  <p className="playlist--table-header">#</p>
                  <p className="playlist--table-header">Title</p>
                </div>
                <p className="playlist--table-header">Album</p>
                <p className="playlist--table-header">Date Added</p>
                <p className="playlist--clock">
                  <AccessTime sx={{ fontSize: "20px", color: "#767676" }} />
                </p>
              </div>
              <hr className="playlist--hr" />
              {tracks.map((d, index) => {
                return (
                  <div key={index} className={`playlist--table-row`}>
                    <MusicRow
                      i={index}
                      id={index + 1}
                      track={d.track}
                      playSong={playSong}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>)
      : <BodySkeleton />}
    </>
  );
}

export default Playlist
