import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import TextareaAutosize from "react-textarea-autosize";
import ins from "./photos/instagram-logo.png";
import img1 from "./photos/pic1.jpg";
import img2 from "./photos/pic2.jpg";
import img3 from "./photos/pic3.jpg";
import img4 from "./photos/pic4.jpg";
import img5 from "./photos/pic5.jpg";
import img6 from "./photos/pic6.jpg";
import img7 from "./photos/pic7.jpg";
import img8 from "./photos/pic8.jpg";
import img9 from "./photos/pic9.jpg";
import img1l from "./photos/pic1l.jpg";
import img2l from "./photos/pic2l.jpg";
import img3l from "./photos/pic3l.jpg";
import img4l from "./photos/pic4l.jpg";
import img5l from "./photos/pic5l.jpg";
import img6l from "./photos/pic6l.jpg";
import img7l from "./photos/pic7l.jpg";
import img8l from "./photos/pic8l.jpg";
import img9l from "./photos/pic9l.jpg";

export default function App() {
	return (
		<Router>
			<div className="App">
				<header className="topnav">
					<div className="title">
						<Link to="/">
							<h1>Felix Fröhlich</h1>
							<h2>Photography</h2>
						</Link>
					</div>
					<div className="mobiletitle">
						<h1>Felix Fröhlich</h1>
						<h2>Photography</h2>
					</div>
					<nav className="navbarcontainer">
						<ul className="navbar">
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/gallery">Gallery</Link>
							</li>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>
						<a href="https://instagram.com/felx_fr">
							<img
								src={ins}
								className="navimg"
								id="navimg1"
								alt="Instagram Logo"
							/>
						</a>
					</nav>
					<nav className="mobilenav">
						<ul>
							<li>
								<Link to="/" className="mobilelink">
									Home
								</Link>
							</li>
							<li>
								<Link to="/gallery" className="mobilelink">
									Gallery
								</Link>
							</li>
							<li>
								<Link to="/about" className="mobilelink">
									About
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<AnimatedSwitch
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
						className="switch-wrapper"
					>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/gallery" component={Gallery} />
					</AnimatedSwitch>
				</Switch>
				<Switch>
					<Route path="/image1" component={image1} />
					<Route path="/image2" component={image2} />
					<Route path="/image3" component={image3} />
					<Route path="/image4" component={image4} />
					<Route path="/image5" component={image5} />
					<Route path="/image6" component={image6} />
					<Route path="/image7" component={image7} />
					<Route path="/image8" component={image8} />
					<Route path="/image9" component={image9} />
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div className="home">
			<header className="topnav">
				<div className="title">
					<Link to="/">
						<h1>Felix Fröhlich</h1>
						<h2>Photography</h2>
					</Link>
				</div>
				<div className="mobiletitle">
					<h1>Felix Fröhlich</h1>
					<h2>Photography</h2>
				</div>
				<nav className="navbarcontainer">
					<ul className="navbar">
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
					<a href="https://instagram.com/felx_fr">
						<img
							src={ins}
							className="navimg"
							id="navimg1"
							alt="something else"
						/>
					</a>
				</nav>
				<nav className="mobilenavhome">
					<ul>
						<li>
							<Link to="/" className="mobilelink">
								Home
							</Link>
						</li>
						<li>
							<Link to="/gallery" className="mobilelink">
								Gallery
							</Link>
						</li>
						<li>
							<Link to="/about" className="mobilelink">
								About
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

function Gallery() {
	return (
		<main className="gallery">
			<h1>Gallery</h1>
			<div className="grid">
				<Link to="/image1">
					<img src={img1} alt="" />
				</Link>
				<Link to="/image2">
					<img src={img2} alt="" />
				</Link>
				<Link to="/image3">
					<img src={img3} alt="" />
				</Link>
				<Link to="/image4">
					<img src={img4} alt="" />
				</Link>
				<Link to="/image5">
					<img src={img5} alt="" />
				</Link>
				<Link to="/image6">
					<img src={img6} alt="" />
				</Link>
				<Link to="/image7">
					<img src={img7} alt="" />
				</Link>
				<Link to="/image8">
					<img src={img8} alt="" />
				</Link>
				<Link to="/image9">
					<img src={img9} alt="" />
				</Link>
			</div>
		</main>
	);
}

function About() {
	return (
		<main className="about">
			<h1>About Me</h1>
			<p className="abouttext">
				I'm Felix Fröhlich, a photographer based in Wolfsburg, Germany.
				I mainly do product photography, but try out other areas as well
				from time to time.
			</p>
			<p className="abouttext">
				Send me an E-Mail to{" "}
				<a href="mailto:felx.froehlich@gmail.com">
					felx.froehlich@gmail.com
				</a>{" "}
				or leave me a message below:
			</p>
			<form name="contact" method="post" className="form">
				<input type="hidden" name="form-name" value="contact" />
				<div className="inputwrapper">
					<input
						type="text"
						name="name"
						id="nameinput"
						required
					></input>
					<label for="name" id="namelabel">
						Name
					</label>
				</div>
				<div className="inputwrapper">
					<input
						type="text"
						name="email"
						id="emailinput"
						required
					></input>
					<label for="email" id="emaillabel">
						E-Mail
					</label>
				</div>
				<div className="inputwrapper">
					<TextareaAutosize
						name="message"
						id="messagetextarea"
						required
					></TextareaAutosize>
					<label for="Message" id="messagelabel">
						Message
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}

function image1() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img1l} alt="" />
			</div>
			<Link to="/image9">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image2">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image2() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img2l} alt="" />
			</div>
			<Link to="/image1">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image3">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image3() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img3l} alt="" />
			</div>
			<Link to="/image2">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image4">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image4() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img4l} alt="" />
			</div>
			<Link to="/image3">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image5">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image5() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img5l} alt="" />
			</div>
			<Link to="/image4">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image6">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image6() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img6l} alt="" />
			</div>
			<Link to="/image5">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image7">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image7() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img7l} alt="" />
			</div>
			<Link to="/image6">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image8">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image8() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img8l} alt="" />
			</div>
			<Link to="/image7">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image9">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function image9() {
	return (
		<main className="imagecontainer">
			<Link to="/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img9l} alt="" />
			</div>
			<Link to="/image8">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/image1">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}
