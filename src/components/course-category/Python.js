import Python from 'Python';
import SingleResource from '../../pages/SingleResource';
import { PythoncourseList } from '../../data/resourcesData';

/* const Pythoncourses = (props) => {
	const courseList = PythoncourseList.map((item) => {
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

export default Pythoncourses; */

const PythonCheckBox = (props) => {
	const [ isShowPython, setIsShowPython ] = useState(true);

	const handlePythonCheckBoxVal = () => {
		props.setIsShowPython(!props.isShowPython);
	};

	return (
		<div className="checkbox" id="python-id" style={{ margin: '50px' }}>
			<label htmlFor="python-id">Python</label>
			<input id="python-id" type="checkbox" checked={props.isShowPython} onChange={handlePythonCheckBoxVal} />
		</div>
	);
};

export default PythonCheckBox;
