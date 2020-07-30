import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ins from "./photos/instagram-logo.png"
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
      <div className="mobiletitle">
        <h1>Felix Fröhlich<br></br><p>Photography</p></h1>
      </div>
      <div className="topnav">
        <div className="title">
          <Link to="/"><h1>Felix Fröhlich<br></br><p>Photography</p></h1></Link>
        </div>
        <div className="navbarcontainer">
          <ul className="navbar">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
          <a href="https://instagram.com/felx_fr"><img src={ins} className="navimg" alt=""></img></a>
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
        <Route path="/image1" component={image1} />
        <Route path="/image2" component={image2} />
        <Route path="/image3" component={image3} />
        <Route path="/image4" component={image4} />
        <Route path="/image5" component={image5} />
        <Route path="/image6" component={image6} />
        <Route path="/image7" component={image7} />
        <Route path="/thankyou" component={success} />
      </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return (
    
    <div className="home">
      <div className="topnav">
      <div className="mobiletitle">
        <h1>Felix Fröhlich<br></br><p>Photography</p></h1>
      </div>
        <div className="title">
          <Link to="/"><h1>Felix Fröhlich<br></br><p>Photography</p></h1></Link>
        </div>
        <div className="navbarcontainer">
          <ul className="navbar">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
          <a href="https://instagram.com/felx_fr"><img src={ins} className="navimg" alt=""></img></a>
        </div>
        <div className="navbarcontainer">
          <ul className="mobilenav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Me</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="grid">
        <Link to="/image1"><img src={img1} alt="" /></Link>
        <Link to="/image2"><img src={img2} alt="" /></Link>
        <Link to="/image3"><img src={img3} alt="" /></Link>
        <Link to="/image4"><img src={img4} alt="" /></Link>
        <Link to="/image5"><img src={img5} alt="" /></Link>
        <Link to="/image6"><img src={img6} alt="" /></Link>
        <Link to="/image7"><img src={img7} alt="" /></Link>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p className="abouttext">Rewrote my website in React.js, this is what I came up with.</p>
      <p className="abouttext">Leave me a message:</p>
      <form name="contact" method="post" action="/thankyou" className="form">
        <input type="hidden" name="form-name" value="contact" />
        <p className="abouttext">
          <label>Your Name: <br /><input type="text" name="name"/></label>
        </p>
        <p className="abouttext">
          <label>Your Email: <br /><input type="email" name="email"/></label>
        </p>
        <p className="abouttext">
          <label>Message: <br /><textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  )
}

function image1() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img1} alt=""></img>
      </div>
      <Link to="/image7"><span className="prev">&#10094;</span></Link>
      <Link to="/image2"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function image2() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img2} alt=""></img>
      </div>
      <Link to="/image1"><span className="prev">&#10094;</span></Link>
      <Link to="/image3"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function image3() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img3} alt=""></img>
      </div>
      <Link to="/image2"><span className="prev">&#10094;</span></Link>
      <Link to="/image4"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function image4() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img4} alt=""></img>
      </div>
      <Link to="/image3"><span className="prev">&#10094;</span></Link>
      <Link to="/image5"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function image5() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img5} alt=""></img>
      </div>
      <Link to="/image4"><span className="prev">&#10094;</span></Link>
      <Link to="/image6"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function image6() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img6} alt=""></img>
      </div>
      <Link to="/image5"><span className="prev">&#10094;</span></Link>
      <Link to="/image7"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function image7() {
  return (
    <div className="imagecontainer">
      <Link to="/gallery"><span className="close">&times;</span></Link>
      <div className="image">
        <img src={img7} alt=""></img>
      </div>
      <Link to="/image6"><span className="prev">&#10094;</span></Link>
      <Link to="/image1"><span className="next">&#10095;</span></Link>
    </div>
  )
}

function success() {
  return (
    <div className="about">
      <h1>Success!</h1>
      <p className="abouttext">Thank you for submitting your message.</p>
      <Link to="/"><p className="backlink">Go back</p></Link>
    </div>
  )
}
