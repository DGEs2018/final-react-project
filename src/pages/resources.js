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
					<ul className="course-category nav">
						<li>
							<NavLink to={`${match.url}/angular`}>Angular</NavLink>
						</li>
						<li>
							<NavLink to={`${match.url}/css`}>CSS</NavLink>
						</li>
						<li>
							<NavLink to={`${match.url}/git`}>GIT</NavLink>
						</li>
						<li>
							<NavLink to={`${match.url}/js`}>JS</NavLink>
						</li>
						<li>
							<NavLink to={`${match.url}/python`}>Python</NavLink>
						</li>
						<li>
							<NavLink to={`${match.url}/reactjs`}>Reactjs</NavLink>
						</li>
					</ul>
					{/* {props.resources.map((el, i) => ( */}
					{/* // <li> */}
					{/* <SingleResource key={i} el={el} /> */}
					{/* {el.title} */}
					{/* </li> */}
					{/* // ))} */}
					{/* console.log('hahaaooaoaoahahah'); */}
					{/* {resources.map(({ title, description, level }) => ( */}
					{/* // <li key={title}> */}
					{/* <Link to={`/resources/${title}`}>{level}</Link> */}
					{/* </li> */}
					{/* // ))} */}
					{/* {resources.map((props) => <Route path={'/single-resource'} render={(props) => <SingleResource />} />)} */}
				</div>

				<Route path={`${match.path}/css`} render={() => <Redirect to={`${match.url}/css`} />} />
				<Route path={`${match.path}/css`} render={() => <AllCategories attrib={CSScourseList} />} />
				<Route path={`${match.path}/js`} render={() => <AllCategories attrib={JScourseList} />} />
				<Route path={`${match.path}/git`} render={() => <AllCategories attrib={GitcourseList} />} />
				<Route path={`${match.path}/reactjs`} render={() => <AllCategories attrib={ReactcourseList} />} />
				<Route path={`${match.path}/python`} render={() => <AllCategories attrib={PycourseList} />} />
				<Route path={`${match.path}/angular`} render={() => <AllCategories attrib={AngularcourseList} />} />
			</div>
		</BrowserRouter>
	);
};

export default Resources;
