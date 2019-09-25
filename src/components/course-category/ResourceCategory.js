import React, { useState } from 'react';
import { allCoursesList } from '../../data/resourcesData';

const ResourceCategory = (props) => {
	console.log(props);

	const [ reactValue, setReactValue ] = useState(false);
	const [ angularValue, setAngularValue ] = useState(false);
	const [ gitValue, setGitValue ] = useState(false);
	const [ jsValue, setJsValue ] = useState(false);
	const [ cssValue, setCssValue ] = useState(false);
	const [ pythonValue, setPythonValue ] = useState(false);

	const handleAngularValue = () => {
		const angularCourses = allCoursesList.filter(function(angular) {
			return angular.coursetype === 'angular';
		});
		props.setAngularValue(angularCourses);
		// props.setAngularValue(!props.angularValue);
	};
	const handleReactValue = () => {
		props.setReactValue(!props.reactValue);
	};
	const handleGitValue = () => {
		props.setGitValue(!props.gitValue);
	};
	const handleJsValue = () => {
		props.setJsValue(!props.jsValue);
	};

	const handlePythonValue = () => {
		props.setPythonValue(!props.pythonValue);
	};
	const handleCssValue = () => {
		props.setCssValue(!props.cssValue);
	};
	const handleAllCheckBoxValues = () => {
		const angularCourses = allCoursesList.filter(function(angular) {
			return angular.coursetype === 'angular';
		});
		props.setAngularValue(angularCourses);
	};
	return (
		<form>
			<label htmlFor="angular-checkbox">Angular</label>
			<input
				type="checkbox"
				id="angular-checkbox"
				checked={props.angularValue}
				onChange={handleAngularValue}
				onChange={handleAllCheckBoxValues}
			/>
			<label htmlFor="react-checkbox">React</label>
			<input type="checkbox" id="react-checkbox" checked={props.reactValue} onChange={handleReactValue} />
			<label htmlFor="git-checkbox">Git</label>
			<input type="checkbox" id="git-checkbox" checked={props.gitValue} onChange={handleGitValue} />
			<label htmlFor="js-checkbox">JavaScript</label>
			<input type="checkbox" id="js-checkbox" checked={props.jsValue} onChange={handleJsValue} />
			<label htmlFor="css-checkbox">CSS</label>
			<input type="checkbox" id="css-checkbox" checked={props.cssValue} onChange={handleCssValue} />
			<label htmlFor="python-checkbox">Python</label>
			<input type="checkbox" id="python-checkbox" checked={props.pythonValue} onChange={handlePythonValue} />
		</form>
	);
};

export default ResourceCategory;
