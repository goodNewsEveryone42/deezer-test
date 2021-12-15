import React from 'react';

import "./MusicItem.css";

const MusicItem = (props) => {
  const { musicItem } = props;
  const { artist, position, preview, title } = musicItem;
  const { picture, name } = artist;

  return (
    <div className="music-item">
      <div className="music-item__info-container">
        <div className="music-item__cover-container">
          <img src={picture} alt="" />
        </div>
        <div className="music-item__info-card">
          <p className="music-item__position">Position # {position}</p>
          <p className="music-item__title">Artist: {name}</p>
          <p className="music-item__description">Track: {title}</p>
        </div>
      </div>
      <audio className="music-item__audio" controls>
          <source src={preview} type="audio/ogg; codecs=vorbis"/>
          <source src={preview} type="audio/mpeg"/>
        </audio>
    </div>
  )
};

export default MusicItem;