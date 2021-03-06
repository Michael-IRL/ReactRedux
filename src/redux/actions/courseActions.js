import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export const loadCoursesSuccess = courses => {
	return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
};

export const createCourse = course => {
	return { type: types.CREATE_COURSE, course: course };
};

export const loadCourses = () => {
	return dispatch => {
		return courseApi
			.getCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				console.log(error);
				throw error;
			});
	};
};
