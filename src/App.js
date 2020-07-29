import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import img1 from "./photos/pic1.jpg"
import img2 from "./photos/pic2.jpg"
import img3 from "./photos/pic3.jpg"
import img4 from "./photos/pic4.jpg"
import img5 from "./photos/pic5.jpg"
import img6 from "./photos/pic6.jpg"
import img7 from "./photos/pic7.jpg"

export default function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <h1 className="mobiletitle">Felix Fröhlich<br></br><p>Fotografie</p></h1>
      </div>
      <div className="topnav">
        <div className="title">
          <h1>Felix Fröhlich<br></br><p>Fotografie</p></h1>
        </div>
        <div className="navbarcontainer">
          <ul className="navbar">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
        <div className="navbarcontainer">
          <ul className="mobilenav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Me</Link></li>
          </ul>
        </div>
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
    <div className="home">
      <img alt="" src="/src/photos/bg.jpg"></img>
    </div>
  )
}

function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="grid">
        <img src={img1} /*onclick={handler1}*/ alt=""></img>
        <img src={img2} /*onclick={handler2}*/ alt=""></img>
        <img src={img3} /*onclick={handler3}*/ alt=""></img>
        <img src={img4} /*onclick={handler4}*/ alt=""></img>
        <img src={img5} /*onclick={handler5}*/ alt=""></img>
        <img src={img6} /*onclick={handler6}*/ alt=""></img>
        <img src={img7} /*onclick={handler7}*/ alt=""></img>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
    </div>
  )
}
