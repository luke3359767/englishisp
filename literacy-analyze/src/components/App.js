import React from 'react';
// import ReactDOM  from 'react-dom';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';

// eslint-disable-next-line
import Header from './Header';

import Vlog from "./Vlog"
import Blog from "./Blog"
import MainPage from "./MainPage"
import Contact from "./Contact"
import AboutTexts from "./AboutTexts"
import Footer from "./Footer"

import Navbar from './Navbar';


const style={
  background:"blue",
  height:"100vh",
}

function App() {
  return (
    <dev>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <div style={style}>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/MainPage" component={MainPage}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/AboutTexts" component={AboutTexts}></Route>
          <Route path="/Vlog" component={Vlog}></Route>
          <Route path="/Blog" component={Blog}></Route>
          </div>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </dev>
  );
}

export default App;
