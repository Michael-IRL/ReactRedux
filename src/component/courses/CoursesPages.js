/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPages extends Component {
	componentDidMount() {
		const { authors, courses, actions } = this.props;

		if (authors.length === 0) {
			actions
				.loadAuthors()
				.catch(error => alert('Author load failed ' + error));
		}
		if (courses.length === 0) {
			actions
				.loadCourses()
				.catch(error => alert('Course load failed ' + error));
		}
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
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthor, dispatch),
		},
	};
};

const mapStateToProps = function (state) {
	return {
		courses:
			state.authors.length === 0
				? []
				: state.courses.map(course => {
						return {
							...course,
							authorName: state.authors.find(a => a.id === course.authorId)
								.name,
						};
				  }),
		authors: state.authors,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPages);
