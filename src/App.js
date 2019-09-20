import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import SearchBox from './components/SearchBox';
import './App.css';
import Layout from './layout/Layout';
import Resources from './pages/Resources';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SingleResource from './pages/SingleResource';
import Share from './pages/Share';
// import { resources } from './data/resourcesData';

const App = (props) => {
	// const [ showResources, setShowResources ] = useState([]);
	// const [ isClicked, setIsClicked ] = useState(false);

	/* useEffect(
		() => {
			effect;
			return () => {
				cleanup;
			};
		},
		[ input ]
	); */

	/* const handleShowResources = () => {
		// console.log('clicked');
		setShowResources(resources);
		// console.log(showResources);
	}; */

	// if (!resources) return null;
	return (
		// <BrowserRouter>
		<div className="App">
			{/* <Route exact path="/" component={LandingPage} onClick={handleShowResources} /> */}
			{/* // if (path === 'resources') return <Resources /> */}
			{/* <Route exact path="/" component={Resources} /> */}
			<BrowserRouter>
				<Route
					path="/resources"
					render={() => <Resources title="title" overview="description" level="level" />}
				/>
				<Route path="/single-resource" component={SingleResource} />
				<Route path="/share" component={Share} />
			</BrowserRouter>
			{/* </Router> */}
			{/* <button onClick={handleShowResources}>Button</button> */}
			<Resources />
			<Share />
		</div>
		// </BrowserRoute>
	);
};

export default App;
