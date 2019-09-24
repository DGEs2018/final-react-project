import React from 'react';
import SingleResource from '../../pages/SingleResource';
import { JScourseList } from '../../data/resourcesData';

/* const JScourses = (props) => {
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

export default JScourses; */

const JsCheckBox = (props) => {
	const [ isShowJs, setIsShowJs ] = useState(true);

	const handleJsCheckBoxVal = () => {
		props.setIsShowJs(!props.isShowJs);
	};

	return (
		<div className="checkbox" id="js-id" style={{ margin: '50px' }}>
			<label htmlFor="js-id">CSS</label>
			<input id="js-id" type="checkbox" checked={props.isShowJs} onChange={handleJsCheckBoxVal} />
		</div>
	);
};

export default JsCheckBox;
