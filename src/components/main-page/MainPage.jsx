import React,  { useState, useEffect } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import MusicList from "../music";
import PageSearch from "../page-search";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import "./Main.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.list);

  useEffect(() => {
    dispatch({ type: "FETCH_TOP_MUSIC_ASYNC" });
  }, [dispatch]);

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
        <Route exact path="/" render={()=><MusicList musicChart={cards}/> }/>
        <Route path="/search" component={PageSearch} />
      </Switch>
    </div>
  )
};

export default MainPage;