import React from 'react';
import '../../css-files/ResourceCategory.css';

const ResourceCategory = (props) => {
	return (
		<form className="all-checkboxes">
			<input
				type="checkbox"
				id="angular-checkbox"
				checked={props.angularValue}
				onChange={() => {
					props.setAngularValue(!props.angularValue);
				}}
			/>
			<label className="course-label" htmlFor="angular-checkbox">
				Angular
			</label>

			<input
				type="checkbox"
				id="react-checkbox"
				checked={props.reactValue}
				onChange={() => {
					props.setReactValue(!props.reactValue);
				}}
			/>
			<label className="course-label" htmlFor="react-checkbox">
				React
			</label>

			<input
				type="checkbox"
				id="git-checkbox"
				checked={props.gitValue}
				onChange={() => {
					props.setGitValue(!props.gitValue);
				}}
			/>
			<label className="course-label" htmlFor="git-checkbox">
				Git
			</label>

			<input
				type="checkbox"
				id="js-checkbox"
				checked={props.jsValue}
				onChange={() => {
					props.setJsValue(!props.jsValue);
				}}
			/>
			<label className="course-label" htmlFor="js-checkbox">
				JavaScript
			</label>

			<input
				type="checkbox"
				id="css-checkbox"
				checked={props.cssValue}
				onChange={() => {
					props.setCssValue(!props.cssValue);
				}}
			/>
			<label className="course-label" htmlFor="css-checkbox">
				CSS
			</label>

			<input
				type="checkbox"
				id="python-checkbox"
				checked={props.pythonValue}
				onChange={() => {
					props.setPythonValue(!props.pythonValue);
				}}
			/>
			<label className="course-label" htmlFor="python-checkbox">
				Python
			</label>
		</form>
	);
};

export default ResourceCategory;
