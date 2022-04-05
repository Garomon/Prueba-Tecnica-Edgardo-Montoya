import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE } from '../constants/actionTypes';

//Un reducer acepta (state, action) y realiza logica si la accion y el tipo de accion coinciden

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};

