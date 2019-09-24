import React from 'react';
import SingleResource from '../../pages/SingleResource';
import { ReactcourseList } from '../../data/resourcesData';

/* const Reactcourses = (props) => {
	const courseList = ReactcourseList.map((item) => {
		return (
			<SingleResource
				title={item.title}
				overview={item.overview}
				photo_link={item.level}
				level={item.level}
				key={item.title}
				instructor={item.instructor_name}
			/>
		);
	});
	return <div>{courseList}</div>;
};

export default Reactcourses; */

const ReactCheckBox = (props) => {
	const [ isShowReact, setIsShowReact ] = useState(true);

	const handleReactCheckBoxVal = () => {
		props.setIsShowReact(!props.isShowReact);
	};

	return (
		<div className="checkbox" id="react-id" style={{ margin: '50px' }}>
			<label htmlFor="check-id">React</label>
			<input id="react-id" type="checkbox" checked={props.isShowReact} onChange={handleReactCheckBoxVal} />
		</div>
	);
};

export default ReactCheckBox;
