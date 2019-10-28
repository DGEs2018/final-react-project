import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Resources from './pages/Resources';
import SingleResource from './pages/SingleResource';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/resources" component={Resources} />
					<Route path="/singleresource" component={SingleResource} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
