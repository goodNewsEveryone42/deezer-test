import React from 'react';
import MusicItem from "../music-item";

import "./MusicList.css";

const MoviesList = (props) => {
  const { musicChart } = props;

  const renderMusicItem = () => {
    return (
      musicChart &&
      musicChart.map((el) => {
        return <MusicItem key={el.id} musicItem={el} />;
      })
    );
  }
  return (
    <div className="music-list">
      <h2 className="music-list__title">Top Music</h2>
      <div className="music-list__cards">
        {renderMusicItem()}
      </div>
    </div>
  )
};

export default MoviesList;