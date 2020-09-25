import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

const ManageCoursesPage = ({ loadAuthors, loadCourses }) => {
	useEffect(() => {
		loadAuthors();
		loadCourses();
	}, []);

	return <div>Manage Courses</div>;
};

ManageCoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	loadAuthors: PropTypes.func.isRequired,
	loadCourses: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	loadCourses: courseActions.loadCourses,
	loadAuthors: authorActions.loadAuthor,
};

const mapStateToProps = function (state) {
	return {
		courses: state.courses,
		authors: state.authors,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
