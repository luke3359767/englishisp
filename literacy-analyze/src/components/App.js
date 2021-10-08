import React from 'react';
// import ReactDOM  from 'react-dom';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Vlog from "./Vlog"
import Blog from "./Blog"
import MainPage from "./MainPage"
import NotFound from "./NotFound"


function App() {
  return (
    <dev>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/Vlog" component={Vlog}></Route>
          <Route path="/Blog" component={Blog}></Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </dev>
  );
}

export default App;
