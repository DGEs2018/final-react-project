import React from 'react';
import SingleResource from '../../pages/SingleResource';
import { GitcourseList } from '../../data/resourcesData';

/* const Gitcourses = (props) => {
	const courseList = GitcourseList.map((item) => {
		return (
			<SingleResource
				{...item}
			/>
		);
	});

	return <div>{courseList}</div>;
};

export default Gitcourses; */

const GitCheckBox = (props) => {
	const [ isShowGit, setIsShowGit ] = useState(true);

	const handleGitCheckBoxVal = () => {
		props.setIsShowGit(!props.isShowGit);
	};

	return (
		<div className="checkbox" id="git-id" style={{ margin: '50px' }}>
			<label htmlFor="git-id">CSS</label>
			<input id="git-id" type="checkbox" checked={props.isShowGit} onChange={handleGitCheckBoxVal} />
		</div>
	);
};

export default GitCheckBox;
