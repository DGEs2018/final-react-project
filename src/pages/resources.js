import React from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import ResourceCategory from '../components/course-category/ResourceCategory';

const Resources = () => {
	return (
		<div>
			<h2 style={{ backgroundColor: 'lightblue' }}>Your course choices</h2>
			<SearchBox />
			<ResourceCategory />
			<ul>
				{allCoursesList.map((eachcourse) => (
					<OneResource
						key={eachcourse.title}
						// the commented out here could be replaced using the spread operator below, to help make the lines of code conciser.
						{...eachcourse}
					/>
				))}
			</ul>
		</div>
	);
};

export default Resources;

export const OneResource = (props) => {
	const style = {
		// display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		borderRadius: '1px solid grey',
		backgroundColor: 'lightgrey',
		lineHeight: '24px',
		margin: '0 auto'
	};
	return (
		<div className="single-resource" style={style}>
			{/* <h1>Hello SingleResource</h1> */}
			<Link to={`/singleresource/${props.title}`}>
				<h2>{props.title}</h2>
			</Link>
			<h3>{props.coursetype}</h3>
			<p>{props.overview}</p>
			<img src={props.link_photo} alt="something" />
			<h3>{props.level}</h3>
			<p>{props.instructor_name}</p>
		</div>
	);
};
