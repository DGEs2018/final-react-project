import React from 'react';
import ResourceDetails from '../components/ResourceDetails';

const SingleResource = () => {
	const { coursetype, title, overview, level, instructor_name, photo_link } = this.props;

	return (
		<div className="single-resource">
			<ResourceDetails />
			single resource
		</div>
	);
};

export default SingleResource;
