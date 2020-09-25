import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/Home';
import AboutPage from './about/About';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPages from './courses/CoursesPages';
import ManageCoursesPage from './courses/ManageCoursesPage';

const App = () => {
	return (
		<div className='container-fluid'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/courses' component={CoursesPages} />
				<Route path='/course/:slug' component={ManageCoursesPage} />
				<Route path='/course' component={ManageCoursesPage} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
};

export default App;
