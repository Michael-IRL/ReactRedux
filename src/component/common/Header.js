import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const activeStyle = { color: '#F15B2A' };
	return (
		<div>
			<nav>
				<NavLink to='/' activeStyle={activeStyle} exact>
					Home Page
				</NavLink>
				{' | '}
				<NavLink id='coursesLink' to='/courses' activeStyle={activeStyle}>
					Courses
				</NavLink>
				{' | '}
				<NavLink to='/course' activeStyle={activeStyle}>
					Course Admin
				</NavLink>
				{' | '}
				<NavLink to='/about' activeStyle={activeStyle}>
					About
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
