import React from 'react';
import SingleResource from '../../pages/SingleResource';
import { CSScourseList } from '../../data/resourcesData';

/* const Csscourses = (props) => {
	const courseList = CSScourseList.map((item) => {
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
	return (
		<div>
			<ul>{courseList}</ul>
		</div>
	);
};

export default Csscourses; */

const CSSCheckBox = (props) => {
	const [ isShowCSS, setIsShowCSS ] = useState(true);

	const handleCSSCheckBoxVal = () => {
		props.setIsShowCSS(!props.isShowCSS);
	};

	return (
		<div className="checkbox" id="css-id" style={{ margin: '50px' }}>
			<label htmlFor="css-id">CSS</label>
			<input id="css-id" type="checkbox" checked={props.isShowCSS} onChange={handleCSSCheckBoxVal} />
		</div>
	);
};

export default CSSCheckBox;
