import React from 'react';
import { BrowserRouter, Route, Redirect, NavLink } from 'react-router-dom';
import {
	JScourseList,
	CSScourseList,
	GitcourseList,
	ReactcourseList,
	PycourseList,
	AngularcourseList
} from '../data/resourcesData';
import AllCategories from '../components/course-category/AllCategories';
import Csscourses from '../components/course-category/CSS';

const Resources = (props) => {
	const [ isShowAngular, setIsShowAngular ] = useState(true);
	return (
		// checkbox angular setIsAngualar !isAngular
		//CourseList.filter(course =>{
		//   if (coursetype === 'angular) return course
		// }).map(course => <Course {...course} />)

		<BrowserRouter>
			<div className="all-courses">
				<div className="course-category header">
					<h2>Course Categories</h2>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Resources;
