import { CREATE_REPOS } from "../actions/type";
const initialState = [];

function reducerRepo(repos = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_REPOS:
      return [...repos, payload];
    default:
      return repos;
  }
}
export default reducerRepo;
