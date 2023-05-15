import React from 'react'
import '../styles/TopArtists.css'
import TopArtistsCard from '../components/TopArtistsCard';
import { useStateProviderValue } from '../StateProvider';

function TopArtists({spotify}) {
  const [{ top_artists }, dispatch] = useStateProviderValue();
  console.log("Top Artists =>", top_artists);
  return (
    <div className="top-artists--body">
      <h2 className="top-artists--page-title">Top Artists</h2>
      <div className="top-artists--grid">
        {top_artists?.artists.map(d => {
          return <TopArtistsCard key={d.id} img={d.images[0].url} name={d.name} rating={d.popularity}/>
        })}
      </div>
      <hr className='top-artists--hr'/>
    </div>
  );
}

export default TopArtists
