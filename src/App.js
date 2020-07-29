import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {reveal as Menu} from "react-burger-menu"

export default function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <h1 className="mobiletitle">Felix Fröhlich<br></br><p>Fotografie</p></h1>
      </div>
      <div className="menubutton">
        <i onclick="openNav()" class="material-icons" id="openbutton">menu</i>
      </div>
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
      <mobilemenu />
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

class mobilemenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}
