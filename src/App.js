import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Felix Fröhlich</h1>
      </div>
      <HomeDE />
    </div>
  );
}

function HomeDE() {
  return (
    <Router>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/de/">Home</Link></li>
          <li><Link to="/de/gallery">Gallerie</Link></li>
          <li><Link to="/de/about">Über Mich</Link></li>
          <li><Link to="/en/">Englisch</Link></li>
        </ul>
      </div>
      <h1>Willkommen</h1>
      <Switch>
        <Route path="/de/" exact component={HomeDE} />
        <Route path="/de/about"  component={AboutDE} />
        <Route path="/de/gallery"  component={GalleryDE} />
        <Route path="/en/" exact component={HomeEN} />
      </Switch>
    </Router>
  )
}

function GalleryDE() {
  return (
    <Router>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/de/">Home</Link></li>
          <li><Link to="/de/gallery">Gallerie</Link></li>
          <li><Link to="/de/about">Über Mich</Link></li>
          <li><Link to="/en/">Englisch</Link></li>
        </ul>
      </div>
      <h1>Gallerie</h1>
      <Switch>
        <Route path="/de/" exact component={HomeDE} />
        <Route path="/de/about"  component={AboutDE} />
        <Route path="/de/gallery"  component={GalleryDE} />
        <Route path="/en/" exact component={HomeEN} />
      </Switch>
    </Router>
  )
}

function AboutDE() {
  return (
    <Router>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/de/">Home</Link></li>
          <li><Link to="/de/gallery">Gallerie</Link></li>
          <li><Link to="/de/about">Über Mich</Link></li>
          <li><Link to="/en/">Englisch</Link></li>
        </ul>
      </div>
      <h1>Über Mich</h1>
      <Switch>
        <Route path="/de/" exact component={HomeDE} />
        <Route path="/de/about"  component={AboutDE} />
        <Route path="/de/gallery"  component={GalleryDE} />
        <Route path="/en/" exact component={HomeEN} />
      </Switch>
    </Router>
  )
}

function HomeEN() {
  return (
    <Router>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/en/">Home</Link></li>
          <li><Link to="/en/gallery">Gallery</Link></li>
          <li><Link to="/en/about">About Me</Link></li>
          <li><Link to="/de/">German</Link></li>
        </ul>
      </div>
      <h1>Welcome</h1>
      <Switch>
        <Route path="/en/" exact component={HomeEN} />
        <Route path="/en/about"  component={AboutEN} />
        <Route path="/en/gallery"  component={GalleryEN} />
        <Route path="/de/" exact component={HomeDE} />
      </Switch>
    </Router>
  )
}

function GalleryEN() {
  return (
    <Router>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/en/">Home</Link></li>
          <li><Link to="/en/gallery">Gallery</Link></li>
          <li><Link to="/en/about">About Me</Link></li>
          <li><Link to="/de/">German</Link></li>
        </ul>
      </div>
      <h1>Gallery</h1>
      <Switch>
        <Route path="/en/" exact component={HomeEN} />
        <Route path="/en/about"  component={AboutEN} />
        <Route path="/en/gallery"  component={GalleryEN} />
        <Route path="/de/" exact component={HomeDE} />
      </Switch>
    </Router>
  )
}

function AboutEN() {
  return (
    <Router>
      <div className="navbarcontainer">
        <ul className="navbar">
          <li><Link to="/en/">Home</Link></li>
          <li><Link to="/en/gallery">Gallery</Link></li>
          <li><Link to="/en/about">About Me</Link></li>
          <li><Link to="/de/">German</Link></li>
        </ul>
      </div>
      <h1>About Me</h1>
      <Switch>
        <Route path="/en/" exact component={HomeEN} />
        <Route path="/en/about"  component={AboutEN} />
        <Route path="/en/gallery"  component={GalleryEN} />
        <Route path="/de/" exact component={HomeDE} />
      </Switch>
    </Router>
  )
}
