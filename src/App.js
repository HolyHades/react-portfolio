import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div className="App">
      <div className="title">
        <h1>Felix Fröhlich</h1>
      </div>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/gallery"  component={Gallery} />
      </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
    </div>
  )
}
