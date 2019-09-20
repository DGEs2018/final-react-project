import React from 'react';
import SingleResource from '../../pages/SingleResource';
import { CSScourseList } from '../../data/resourcesData';

const Csscourses = (props) => {
	const courseList = CSScourseList.map((item) => {
		return (
			<SingleResource
				title={item.title}
				overview={item.overview}
				photo={item.photo_link}
				level={item.level}
				key={item.title}
				instructor={item.instructor_name}
			/>
		);
	});
	return (
		<div>
			<ul>{courseList}</ul>
		</div>
	);
};

export default Csscourses;
