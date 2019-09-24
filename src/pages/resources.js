import React from 'react';
import { allCoursesList } from '../data/resourcesData';
import SingleResource from './SingleResource';

const Resources = () => {
	return (
		<div>
			<h2>Your course choices</h2>
			{allCoursesList.map((eachcourse) => (
				<SingleResource
					key={eachcourse.title}
					// the commented out here could be replaced using the spread operator below, to help make the lines of code conciser.
					{...eachcourse}
				/>
			))}
		</div>
	);
};

export default Resources;
