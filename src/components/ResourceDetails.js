import React, { useState } from 'react';
import { allCoursesList } from '../data/resourcesData';
import Resources from '../pages/Resources';
import { Link } from 'react-router-dom';

const ResourceDetails = (props) => {
	console.log(props);
	// const allItems = allCoursesList;
	// const [ resource, setResource ] = useState([]);
	// const handleResource = () => {
	// 	setResource(resource);
	// };

	return (
		<div>
			{allCoursesList.map((item) => <h2>{item.title}</h2>)}

			<p>{props.coursetype}</p>
			<p>{props.overview}</p>
			<img src={props.photo_link} alt="showing_something" />
			<h6>{props.level}</h6>
			<p>{props.instructor_name}</p>
			<Link to="/resources">
				<button>Back to resources</button>
				<button>Pin or Add to my favourites</button>
			</Link>
		</div>
	);
};

export default ResourceDetails;
