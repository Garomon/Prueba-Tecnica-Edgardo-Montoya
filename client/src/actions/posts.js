import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';   // La * la usamos para importar todo de la api, y usarlo como 'api' ej. api.fetPosts()


//Creadores de acciones, funciones que devuelven acciones. 
//La accion es un objeto que contiene el type:'' y el payload: []


export const getPosts = (page) => async (dispatch) => { // Redux Thunk nos permite tener dos arrow functions para una funcion async
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};



export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
