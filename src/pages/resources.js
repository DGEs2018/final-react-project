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
					/* title={eachcourse.title}
					type={eachcourse.type}
					overview={eachcourse.overview}
					photo_link={eachcourse.photo_link}
					level={eachcourse.level}
					instructor_name={eachcourse.instructor_name} */
					// the commented out here could be replaced using the spread operator below, to help make the lines of code conciser.
					{...eachcourse}
				/>
			))}
		</div>
	);
};

export default Resources;
