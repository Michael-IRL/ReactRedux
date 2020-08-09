import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export const loadAuthorSuccess = authors => {
	return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
};

export const loadAuthor = () => {
	return dispatch => {
		return authorApi
			.getAuthors()
			.then(authors => {
				dispatch(loadAuthorSuccess(authors));
			})
			.catch(error => {
				console.log(error);
				throw error;
			});
	};
};
