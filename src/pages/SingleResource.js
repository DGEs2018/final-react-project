import React from 'react';

const SingleResource = (props) => {
	const style = {
		// display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		borderRadius: '1px solid grey',
		backgroundColor: 'lightgrey',
		lineHeight: '24px'
	};
	return (
		<div className="single-resource" style={style}>
			{/* <h1>Hello SingleResource</h1> */}
			<h1>{props.title}</h1>
			<h2>{props.coursetype}</h2>
			<p>{props.overview}</p>
			<img src={props.link_photo} alt="something" />
			<h3>{props.level}</h3>
			<p>{props.instructor_name}</p>
		</div>
	);
};

export default SingleResource;
