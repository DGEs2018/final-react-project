import React from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';

const SingleResource = (props) => {
	console.log(props);
	const courseTitle = props.location.pathname.slice(16);
	// console.log(courseTitle);
	// const everyTitle = allCoursesList.map((el) => courseTitle);
	// console.log(everyTitle);
	const titleBySplit = props.location.pathname.split('/');
	console.log(titleBySplit);
	// const pathRemoved = titleBySplit.replace('/singleresource/', '');
	// const titleOnly = pathRemoved.join('');
	// console.log(titleOnly);

	const titleFound = allCoursesList.find((element) => {
		// if the title of singleresource matches the title of one of the item inside the resources array
		if (courseTitle === element.title) {
			return element;
		}
	});

	console.log(allCoursesList.filter((el) => el.title === courseTitle));

	console.log(titleFound);

	return (
		<div className="single-resource">
			<ResourceDetails />
		</div>
	);
};

export default SingleResource;

const ResourceDetails = (props) => {
	// console.log(props);
	// let data = { pathname: '/resources/:id' };
	return (
		<div>
			<h2>{props.courseTitle}</h2>
			<p>{props.coursetype}</p>
			<p>{props.overview}</p>
			<img src={props.photo_link} alt="showing_something" />
			<h6>{props.level}</h6>
			<p>{props.instructor_name}</p>
			);
			{/* <Link to={data} /> */}
			<Link to="/resources">
				<button>Back to resources</button>
				<button>Pin/Add to favourites</button>
			</Link>
		</div>
	);
};
