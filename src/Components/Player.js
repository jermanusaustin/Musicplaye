import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './Player.css';

function Player() {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const files = location.state?.files || [];
  const file = files[index];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [volume, setVolume] = useState(1); 
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const mediaRef = file.type === 'audio' ? audioRef : videoRef;

  useEffect(() => {
    const currentMedia = mediaRef.current;

    if (currentMedia) {
  
      const updateProgress = () => {
        const progressPercent = (currentMedia.currentTime / currentMedia.duration) * 100;
        setProgress(progressPercent);
      };

      currentMedia.ontimeupdate = updateProgress;

      
      return () => {
        currentMedia.ontimeupdate = null; 
      };
    }
  }, [mediaRef]);

  const togglePlayPause = () => {
    if (mediaRef.current) {
      isPlaying ? mediaRef.current.pause() : mediaRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (mediaRef.current) {
      mediaRef.current.volume = newVolume; 
    }
  };

  if (!file) {
    return <p>No file selected</p>;
  }

  return (
    <div className="player-page">
      <h1>Now Playing: {file.track}</h1>
      <p>Artist: {file.artist}</p>
      <p>Album: {file.album}</p>

      {file.type === 'audio' && (
        <audio ref={audioRef} src={file.url} />
      )}
      {file.type === 'video' && (
        <video ref={videoRef} src={file.url} />
      )}

   
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="custom-controls">
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>

    
      <div className="volume-control">
        <label htmlFor="volume-slider">Volume:</label>
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>Back to List</button>
    </div>
  );
}

export default Player;
