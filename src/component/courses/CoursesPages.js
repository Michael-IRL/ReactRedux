import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPages extends Component {
	componentDidMount() {
		this.props.actions
			.loadCourses()
			.catch(error => alert('Course load failed ' + error));
	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<CourseList courses={this.props.courses} />
			</>
		);
	}
}

CoursesPages.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(courseActions, dispatch),
	};
};

const mapStateToProps = function (state) {
	return { courses: state.courses };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPages);
