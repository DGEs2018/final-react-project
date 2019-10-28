import React from 'react';
import '../css-files/Landingpage.css';
import pocologo from '../images/pocologo.jpg';

export const NavBar = () => {
	return (
		<nav className="nav-bar">
			<img src={pocologo} className="logo" />
			<ul className="navbar-links">
				<li>
					<a href="#" className="nav-link">
						Home
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						About
					</a>
				</li>
				<li>
					<a href="/resources" className="nav-link">
						Reference Materials for Front-end web development
					</a>
				</li>
			</ul>
		</nav>
	);
};

// export default NavBar
const LandingPage = (props) => {
	console.log(props);
	return (
		<div className="landing-page">
			<NavBar />
			<h1 className="header">Welcome to Powercoder's colleagues</h1>
			<p className="lead-paragraph">:a platform where you can exchange learning materials</p>
		</div>
	);
};
export default LandingPage;
