import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
  const [favorites, setFavorites] = useState([]);

  const publicFiles = [
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      type: 'audio',
      artist: 'SoundHelix',
      album: 'Song Collection 1',
      track: 'SoundHelix Song 1',
      imageUrl: 'https://www.crytek.com/frontend/a5a1e09ea9880e3f5e9c546818c84a40-320.jpg'
    },
    {
      url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      type: 'video',
      artist: 'Sample Video',
      album: 'Videos',
      track: 'Sample Video',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Music_logo.png'
    },
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      type: 'audio',
      artist: 'SoundHelix',
      album: 'Song Collection 2',
      track: 'SoundHelix Song 2',
      imageUrl: 'https://www.crytek.com/frontend/a5a1e09ea9880e3f5e9c546818c84a40-320.jpg'
    },
    {
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      type: 'audio',
      artist: 'SoundHelix',
      album: 'Song Collection 3',
      track: 'SoundHelix Song 3',
      imageUrl: 'https://www.crytek.com/frontend/a5a1e09ea9880e3f5e9c546818c84a40-320.jpg'
    }
  ];

  const addToFavorites = (file) => {
    const updatedFavorites = [...favorites, file];
    setFavorites(updatedFavorites);
  };

  return (
    <div className="main-page">
      <h1>KM Player</h1>
      <ul>
        {publicFiles.map((file, index) => (
          <li key={index}>
            <span>{file.track} by {file.artist}</span>
            <Link to={`/player/${index}`} state={{ files: publicFiles }}>Play</Link>
            <button onClick={() => addToFavorites(file)}class="favorites">Add to Favorites</button>
          </li>
        ))}
      </ul>
      <Link to="/favorites" state={{ favorites }}>Go to Favorites</Link>
    </div>
  );
}

export default Main;
