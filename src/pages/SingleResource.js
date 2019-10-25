import React from 'react';
import { allCoursesList } from '../data/resourcesData';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavBar} from './LandingPage';
import '../css-files/SingleResource.css';


const SingleResource = (props) => {
	// console.log (props) helps to log and see what the props are
	console.log(props);

	// it's to observe from the components window in the inspector that the variable belowthe entire url
	const courseTitle = props.location.pathname.slice(16);
	console.log(courseTitle);

	// another way to do it using split would be what's below
	const titleBySplit = props.location.pathname.split('/');
	console.log(titleBySplit);
	// out of the splitted array pick out the element on the 3rd index
	const titleOnly = titleBySplit[2];
	console.log(titleOnly);
	
	// we attach the .find() method on the allAttributes variable which would pick the first one passing the test
	const allCourseAttributes = allCoursesList.find((element) => {
		// if the title of singleresource matches the title of one of the item inside the resources array
		if (courseTitle === element.title) {
			return element;
		}
	});

	console.log(allCourseAttributes);
	// {...allAttributes} spreads all that there's in the allAttributes variable defined (is one good way of avoiding redundancy)
	// was the name assigned to the div below, className="single-resource"
	return (
		<div> 
			<ResourceDetails {...allCourseAttributes} />
		</div>
	);
};

export default SingleResource;

const ResourceDetails = (props) => {
	console.log(props);
	
	return (
		<div >
			<NavBar />
			<div className='resource'>
				<div className='resource--image'>
					{/* <div className='image-holder'> */}
						<img 
							// className={Style.card}
							src={props.preview_image}
							image={props.preview_image}
						/>
					{/* </div> */}
					<div className='resource--more'>
						<h1>{props.title}</h1>
						<h2>Course Overview</h2>
						<p>{props.overview}</p>	
						<h5>{props.level}</h5>
						<p>{props.instructor_name}</p>
					</div>
				</div>
			</div>		
			<Link to="/resources">
				<Button size="small" color="primary">Back to resources</Button>
				<Button size="small" color="primary"> Pin/Add to favourites </Button>
			</Link>
		</div>
	);
};
