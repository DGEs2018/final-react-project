import React, { useState } from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';
import ResourceCategory from '../components/course-category/ResourceCategory';
import { NavBar } from './LandingPage';
import '../css-files/Resources.css';

const CourseStat = (props) => {
	console.log(props);
	return (
		<div>
			<p>
				{props.numberOfCourses} / {allCoursesList.length} courses listed
			</p>
		</div>
	);
};

const Resources = (props) => {
	console.log(props);
	const [ reactValue, setReactValue ] = useState(false);
	const [ angularValue, setAngularValue ] = useState(false);
	const [ gitValue, setGitValue ] = useState(false);
	const [ jsValue, setJsValue ] = useState(false);
	const [ cssValue, setCssValue ] = useState(false);
	const [ pythonValue, setPythonValue ] = useState(false);

	const filteredCourseList = allCoursesList.filter((el) => {
		if (
			angularValue === false &&
			reactValue === false &&
			cssValue === false &&
			gitValue === false &&
			jsValue === false &&
			pythonValue === false
		) {
			return true;
		} else if (
			(el.coursetype === 'angular' && angularValue) ||
			(el.coursetype === 'react' && reactValue) ||
			(el.coursetype === 'css' && cssValue) ||
			(el.coursetype === 'git' && gitValue) ||
			(el.coursetype === 'js' && jsValue) ||
			(el.coursetype === 'python' && pythonValue)
		) {
			return true;
		} else {
			return false;
		}
	});
	return (
		<div>
			<NavBar />
			<div className="resources">
				<h1>Course Categories in Front-end Web Development</h1>
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
				<CourseStat numberOfCourses={filteredCourseList.length} totalCourses={allCoursesList.length} />
				<ul className="course-list">
					{filteredCourseList.map((eachcourse) => (
						<OneResource
							key={eachcourse.title}
							// the commented out here could be replaced using the spread operator below, to help make the lines of code conciser.
							{...eachcourse}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export const OneResource = (props) => {
	//(props);
	return (
		<div className="one-resource">
			<img className="one-resource--image" src={props.preview_image} alt="" />
			<div>
				<Link to={`/singleresource/${props.title}`}>
					<h1>{props.title}</h1>
				</Link>
				<h2>{props.coursetype}</h2>
				<h3>{props.level}</h3>
				<p>{props.instructor_name}</p>
			</div>
		</div>
	);
};

export default Resources;
