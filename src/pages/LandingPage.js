import React from 'react';
/* import Resources from './Resources';
import SingleResource from './SingleResource';
import Share from './Share'; */
import { NavLink, Route, Redirect, Link } from 'react-router-dom';
import SingleResource from './SingleResource';
import Share from './Share';

import About from '../components/About';
const LandingPage = () => {
	return (
		<div className="landing-page contents">
			<p>Landing Page - might need a background-image</p>
			<About />
			{/* 	<Link to="/resources">
				{' '}
				<p>All Resources</p>
			</Link>
			<Link to="/single-resources">
				{' '}
				<p>Resource</p>
			</Link>
			<Link to="/share">
				<p>Share</p>
			</Link>
			<Link />
			<Route to="/resources/single-resource" component={SingleResource} />
			<Route to="/resources/share" component={Share} /> */}
			{/* <Route to="/resources/single-resource" component={SingleResource}></Route> */}
			<div className="resources header">
				<h2>Contents</h2>
				<ul className="content-navigator">
					<li>
						<NavLink to="/resources">Courses</NavLink>
					</li>
					<li>
						<NavLink to="/share">Share</NavLink>
					</li>
				</ul>
			</div>
			{/* <Redirect to="/resources" /> */}
			{/* <Redirect to="/resources" /> */}
			{/* <Route exact path="/resources" render={() => <Redirect to="/" />} /> */}
			{/* <Route path="/single-resource" component={SingleResource} /> */}
			{/* <Route path="/share" component={Share} /> */}
		</div>
	);
};

export default LandingPage;
