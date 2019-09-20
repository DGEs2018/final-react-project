import React from 'react';
import SingleResource from '../../pages/SingleResource';
import { JScourseList } from '../../data/resourcesData';

const JScourses = (props) => {
	const courseList = JScourseList.map((item) => {
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
	return <div>{courseList}</div>;
};

export default JScourses;
