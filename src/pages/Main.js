import "../styles/Main.css";
import React, { useEffect, useState } from "react";
import BodySkeleton from "../components/common/BodySkeleton";
import { Link } from "react-router-dom";
import LibraryCard from "../components/LibraryCard";
import { useStateProviderValue } from "../StateProvider";

function Main({spotify, refObj}) {

  const [{ home }, dispatch] = useStateProviderValue();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(spotify)
        .then((res) => {
          setData(res);
          setLoading(true);
        })
        .catch((err) => console.log("Something went wrong", err));
    }, 500);
  }, [spotify])


  return (
    <div className="main--container">
      <h2 ref={refObj} className='main--title'>Playlists</h2>
          <div className="main--grid">
            <div className="main--grid-first-card">
              <div className="main--liked-para">
                {home?.playlists.items.slice(0, 5).map((d) => (d.name)).join(" • ") + "..."}
              </div>

                <h2 className='main--card-title'>Liked Songs</h2>
                <p className="main--clear-para">61 liked songs</p>
            </div>
            {home?.playlists.items.map(d => {
              return (
              <Link to={`/playlists/${d.id}`} key={d.id}>
                <LibraryCard key={d.id} img={d.images[0].url} title={d.name} name={d.owner.display_name}/>
              </Link>
              )
            })}
          </div>
        <hr className='library--hr'/>
    </div>
  );
}
export default Main;
