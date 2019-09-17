import React from 'react';
import LandingPage from './pages/LandingPage';
import NavigationBar from './components/NavigationBar';
import SearchBox from './components/SearchBox';
import './App.css';
import Layout from './layout/Layout';
import Resources from './pages/Resources';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleResource from './pages/SingleResource';
import Share from './pages/Share';

const App = () => {
	return (
		<div className="App">
			{/* <LandingPage /> */}

			<Router>
				<Switch>
					{/* <button>hello</button> */}
					<Route path="/share" component={Share} />
					{/* // if (path === 'resources') return <Resorces /> */}
					{/* <Route exact path="/" component={Resources} /> */}
					{/* <Route path="/resources" component={Resources} /> */}
					{/* <Route path="/single-resource" component={SingleResource} /> */}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
