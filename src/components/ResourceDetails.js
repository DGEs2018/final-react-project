import React from 'react';
import { Link } from 'react-router-dom';

const ResourceDetails = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.coursetype}</p>
			<p>{props.overview}</p>
			<img src={props.photo_link} alt="showing_something" />
			<p>{props.expected_to_last}</p>
			<h6>{props.level}</h6>
			<p>{props.instructor_name}</p>
			);
			<Link to="/resources">
				<button>Back to resources</button>
				<button>Pin/Add to favourites</button>
			</Link>
		</div>
	);
};

export default ResourceDetails;
