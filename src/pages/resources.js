import React from 'react';
import SingleResource from './SingleResource';

const Resources = () => {
	const data = {
		title: 'React with Wes Bos',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi?',
		level: 'beginners'
	};
	return (
		<div>
			<SingleResource />
			<SingleResource />
			<SingleResource />
			<SingleResource />
		</div>
	);
};

export default Resources;
