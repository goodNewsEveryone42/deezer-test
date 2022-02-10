import React, { useState } from 'react';
import InputSearch from "../input-components";
import MusicList from "../music";
import MusicService from "../../service/music";

import "./PageSearch.css";

const PageSearch = () => {
  const [musicChart, setMusic] = useState(null);

  const musicService = new MusicService();

  const handleChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    musicService.searchMusic(query).then((res) => setMusic(res));
  };
  return (
    <div className="page-search__container">
        <InputSearch
          handleChange={handleChange}
        />
        <MusicList
          musicChart={musicChart}
         />
    </div>
  )
};

export default PageSearch;