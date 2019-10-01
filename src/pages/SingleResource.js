import React from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';

const SingleResource = (props) => {
	// console.log (props) helps to log and see what the props are
	console.log(props);

	// it's to observe from the components window in the inspector that the variable belowthe entire url
	const courseTitle = props.location.pathname.slice(16);
	console.log(courseTitle);

	// another way to do it using split would be what's below
	const titleBySplit = props.location.pathname.split('/');
	console.log(titleBySplit);
	// out of the splitted array pick out the element on the 3rd index
	const titleOnly = titleBySplit[2];
	console.log(titleOnly);
	// const courseType = props.coursetype;
	// console.log(courseType);

	/* const courseTypes = allCoursesList.map((element) => element.coursetype);
	console.log(courseTypes); */
	// we attach the .find() method on the allAttributes variable which would pick the first one passing the test
	const allCourseAttributes = allCoursesList.find((element) => {
		// if the title of singleresource matches the title of one of the item inside the resources array
		if (courseTitle === element.title) {
			return element;
		}
	});

	console.log(allCourseAttributes);
	// {...allAttributes} spreads all that there's in the allAttributes variable defined (is one good way of avoiding redundancy)
	return (
		<div className="single-resource">
			<ResourceDetails {...allCourseAttributes} />
		</div>
	);
};

export default SingleResource;

const ResourceDetails = (props) => {
	console.log(props);

	// let data = { pathname: '/resources/:id' };
	return (
		<div>
			<div>
				<h2 textAlign="left">{props.title}</h2>
				<p>{props.coursetype}</p>
				<p width="600px" textAlign="justify">
					{props.overview}
				</p>
				<img src={props.photo_link} alt="showing_something" width="600px" height="600px" />
				<h6>{props.level}</h6>
				<p>{props.instructor_name}</p>
			</div>
			<Link to="/resources">
				<button>Back to resources</button>
				<button>Pin/Add to favourites</button>
			</Link>
		</div>
	);
};
