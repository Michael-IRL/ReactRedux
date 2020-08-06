import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPages extends Component {
	state = {
		course: {
			title: '',
		},
	};

	handleChange = event => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course: course });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.actions.createCourse(this.state.course);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input
					type='text'
					value={this.state.course.title}
					onChange={this.handleChange}
				/>
				<input type='submit' value='save' />
				<ul>
					{this.props.courses.map(course => (
						<li key={course.title}>{course.title}</li>
					))}
				</ul>
			</form>
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
