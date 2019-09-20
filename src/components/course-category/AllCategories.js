import React from 'react';
import SingleResource from '../../pages/SingleResource';

const spreadAllCategoriesList = [
	...CSScourseList,
	...JScourseList,
	...ReactcourseList,
	...AngularcourseList,
	...GitcourseList,
	...PycourseList
];

const AllCategories = (props) => {
	// instead of iterating a specific course list, such as JScourseList, CsscourseList,
	// we'll iterate over the data being passed as props pass..
	const allCourseList = AllCategoriesList.map((item) => {
		<SingleResource
			title={item.title}
			overview={item.overview}
			photo={item.photo_link}
			level={item.level}
			image={item.photo_link}
			key={item.title}
		/>;
	});
	return <div>{allCourseList}</div>;
};

export default AllCategories;

const allCssCourses = AllCourse.filter((course) => course.type === 'css');
const allJsCourses = AllCategories.filter((el) => el.type === 'js');
const allGitCourses = AllCategories.filter((el) => el.type === 'git');
const allPythonCourses = AllCategories.filter((el) => el.type === 'python');
const allReactCourses = AllCategories.filter((el) => el.type === 'react');
const allAngularCourses = AllCategories.filter((el) => el.type === 'angular');
