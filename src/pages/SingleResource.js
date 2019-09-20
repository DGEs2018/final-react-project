import React from 'react';

const SingleResource = (props) => {
	console.log(props);
	return (
		<div>
			{/* <h2>Course Title</h2>
			<h3>Course Overview</h3>
			<p>Course Description</p>
            <h6>Level</h6> */}
			{props.el}
			{/* console.log(props.el) */}
		</div>
	);
};

export default SingleResource;
