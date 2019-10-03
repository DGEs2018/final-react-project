import React, { useState } from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import ResourceCategory from '../components/course-category/ResourceCategory';

const Resources = (props) => {
	// const [ checkBoxValues, setCheckBoxValues ] = useState({});

	console.log(props);
	const [ reactValue, setReactValue ] = useState(false);
	const [ angularValue, setAngularValue ] = useState(false);
	const [ gitValue, setGitValue ] = useState(false);
	const [ jsValue, setJsValue ] = useState(false);
	const [ cssValue, setCssValue ] = useState(false);
	const [ pythonValue, setPythonValue ] = useState(false);

	const filteredCourseList = allCoursesList.filter((el) => {
		if (
			(el.coursetype === 'react' && reactValue) ||
			(el.coursetype === 'css' && cssValue) ||
			(el.coursetype === 'git' && gitValue) ||
			(el.coursetype === 'js' && jsValue) ||
			(el.coursetype === 'angular' && angularValue) ||
			(el.coursetype === 'python' && pythonValue)
		) {
			// reactValue === true, checks to see if the value equals true, truthy state
			return true;
		} else {
			return false;
		}
	});

	return (
		<div>
			<h2 style={{ backgroundColor: 'lightblue' }}>Your course choices</h2>
			<SearchBox />
			<ResourceCategory
				reactValue={reactValue}
				setReactValue={setReactValue}
				angularValue={angularValue}
				setAngularValue={setAngularValue}
				gitValue={gitValue}
				setGitValue={setGitValue}
				jsValue={jsValue}
				setJsValue={setJsValue}
				cssValue={cssValue}
				setCssValue={setCssValue}
				pythonValue={pythonValue}
				setPythonValue={setPythonValue}
			/>

			<ul>
				{filteredCourseList.map((eachcourse) => (
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
	//(props);
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
