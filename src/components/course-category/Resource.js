import React from 'react';

const Resource = (props) => {
	return (
		<div>
			<li className="resource-category">
				<img className="resource-avatar" />
				<div>
					<h3>{props.title}</h3>
					<p>{props.overview}</p>
				</div>
			</li>
		</div>
	);
};

export default Resource;
