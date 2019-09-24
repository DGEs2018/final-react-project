import React from 'react';
import SingleResource from '../../pages/Resources';
import { AngularcourseList } from '../../data/resourcesData';
// import { resources } from '../../data/resourcesData';

/* const Angularcourses = (props) => {
	const courseList = AngularcourseList.map((item) => {
		return (
			<SingleResource
				title={item.title}
				overview={item.overview}
				photo={item.photo_link}
				level={item.level}
				image={item.photo_link}
				key={item.title}
			/>
		);
	});

	return (
		<div>
			<ul>{courseList}</ul>
		</div>
	);
};

export default Angularcourses; */

/* const personSchema = {
	name: string,
	lastName: string
};

const Dawit = {
	name: 'Dawit',
	lastName: '...'
};

const Oli = {
	name: 'oli',
	lastName: 'walker'
};
 */

const angularCheckbox = (props) => {
	const [ isShowAngular, setIsShowAngular ] = useState(true);

	const handleAngularCheckBoxVal = () => {
		props.setIsShowAngular(!props.checkBoxVal);
	};

	return (
		<div className="checkbox" id="angular-id" style={{ margin: '50px' }}>
			<label htmlFor="angular-id">Angular</label>
			<input id="angular-id" type="checkbox" checked={props.isShowAngular} onChange={handleAngularCheckBoxVal} />
		</div>
	);
};

export default angularCheckbox;
