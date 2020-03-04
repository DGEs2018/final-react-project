import React from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';
import { NavBar } from './LandingPage';
import '../css-files/SingleResource.css';

const SingleResource = (props) => {
	const courseTitle = props.location.pathname.slice(16);
	const allCourseAttributes = allCoursesList.find((element) => {
		if (courseTitle === element.title) {
			return element;
		}
	});
	return (
		<div>
			<ResourceDetails {...allCourseAttributes} />
		</div>
	);
};

export default SingleResource;

const ResourceDetails = (props) => {
	return (
		<div>
			<NavBar />
			<div className="resource">
				<div className="resource--image">
					<img src={props.preview_image} image={props.preview_image} />
					<div className="resource--more">
						<h1>{props.title}</h1>
						<h2>Course Overview</h2>
						<p>{props.overview}</p>
						<h5>{props.level}</h5>
						<p>{props.instructor_name}</p>
					</div>
				</div>
			</div>
			<Link to="/resources">
				<button>Back to resources</button>
			</Link>
		</div>
	);
};
