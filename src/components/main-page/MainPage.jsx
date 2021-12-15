import React,  { useState, useEffect } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import MusicList from "../music";
import PageSearch from "../page-search";
import MusicService from "../../service/music";

import "./Main.css";

const MainPage = () => {
  const [musicChart, setMusic] = useState(null);

  const musicService = new MusicService();

  useEffect(() => {
    musicService.getResource().then((res) => setMusic(res));
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__tabs">
      <Link to="/" className="main-page__tab">
          <p>
            Главная
          </p>
        </Link>
        <Link to="/search" className="main-page__tab">
          <p>
            Поиск
          </p>
        </Link>
      </div>
      <Switch>
        <Route exact path="/" render={()=><MusicList musicChart={musicChart}/> }/>
        <Route path="/search" component={PageSearch} />
      </Switch>
    </div>
  )
};

export default MainPage;