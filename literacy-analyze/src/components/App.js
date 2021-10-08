import React from 'react';
// import ReactDOM  from 'react-dom';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';


function App() {
  return (
    <dev>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/Vlog" component="Vlog"></Route>
          <Route path="/Blog" component="Blog"></Route>
        </Switch>
      </BrowserRouter>
    </dev>
  );
}

export default App;
