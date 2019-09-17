import React from 'react';
/* import Resources from './Resources';
import SingleResource from './SingleResource';
import Share from './Share'; */
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div>
			<p>Landing Page - might need a background-image</p>
			<Link to="/resources">
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
		</div>
	);
};

export default LandingPage;
