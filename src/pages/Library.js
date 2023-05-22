import React from 'react'
import '../styles/Library.css';
import { useStateProviderValue } from '../StateProvider';
import LibraryCard from '../components/LibraryCard';
import { Link } from 'react-router-dom';

function Library({refObj}) {
  const [{ search }, dispatch] = useStateProviderValue();
  console.log("Search =>", search);

  return (
    <div className="library--body">
      <h2 ref={refObj} className="library--page-title">Your Library</h2>
      <div className="library--grid">
        {search?.playlists.items.map(d => {
          return (
          <Link to={`/playlists/${d.id}`} key={d.id}>
            <LibraryCard key={d.id} img={d.images[0].url} title={d.name} name={d.owner.display_name}/>
          </Link>
          )
        })}
      </div>
      <hr className='library--hr'/>
    </div>
  )
}

export default Library
