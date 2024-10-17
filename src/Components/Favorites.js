import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Favorites.css';

function Favorites() {
  const location = useLocation();
  const { favorites: initialFavorites = [] } = location.state || {};
  
  const [favorites, setFavorites] = useState(initialFavorites);

  const removeFromFavorites = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites); 
  };

  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((file, index) => (
            <li key={index}>
              <img 
                src={file.imageUrl} 
                alt={file.track} 
                style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
              />
              <span>{file.track} by {file.artist}</span>

         
              <Link to={`/player/${index}`} state={{ files: favorites }}>
                <button className="play-button">Play from Favorites</button>
              </Link>

              <button className="remove-button" onClick={() => removeFromFavorites(index)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No favorites added yet!</p>
        )}
      </ul>
      <Link to="/">Back to Main</Link>
    </div>
  );
}

export default Favorites;
