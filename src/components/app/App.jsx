import React from 'react';
import MainPage from "../main-page/MainPage";

import { Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Link to="/" className="main__title">Music Deezerd</Link>
      <div className="main__container">
        <Link exact path="/" component={MainPage} />
      </div>
    </div>
  )
};

export default App;