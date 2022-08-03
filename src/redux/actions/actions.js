import { CREATE_REPOS } from "./type";

export const createRepos = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_REPOS,
      payload: data,
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
