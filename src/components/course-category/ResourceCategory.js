import React from 'react';

const ResourceCategory = () => {
	const handleAngularValue = () => {
		props.setAngularValue(!props.angularValue);
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
	return (
		<form>
			<label htmlFor="angular-checkbox">Angular</label>
			<input type="angular-checkbox" id="checkbox" />
			<label htmlFor="react-checkbox">React</label>
			<input type="react-checkbox" id="checkbox" />
			<label htmlFor="git-checkbox">Git</label>
			<input type="git-checkbox" id="checkbox" />
			<label htmlFor="js-checkbox">JavaScript</label>
			<input type="js-checkbox" id="checkbox" />
			<label htmlFor="css-checkbox">CSS</label>
			<input type="css-checkbox" id="checkbox" />
			<label htmlFor="python-checkbox">Python</label>
			<input type="python-checkbox" id="checkbox" />
		</form>
	);
};

export default ResourceCategory;
