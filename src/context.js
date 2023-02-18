import React, { useContext, useEffect, useRef } from 'react';
import { useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = 'https://api.unsplash.com/photos/';
const searchUrl = 'https://api.unsplash.com/search/photos/';

const initialState = {
  loading: false,
  photos: [],
  page: 1,
  query: '',
  newImages: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mounted = useRef(false);

  const fetchPhotos = async () => {
    dispatch({ type: 'LOADING' });

    let url;
    const urlPage = `&page=${state.page}`;
    const urlQuery = `&query=${state.query}`;

    if (state.query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (state.query && state.page === 1) {
        dispatch({ type: 'NEW_RESULTS_BY_SEARCH', payload: data.results });
      } else if (state.query) {
        dispatch({ type: 'SEARCH_RESULTS', payload: data.results });
      } else {
        dispatch({ type: 'FETCH_PHOTOS', payload: data });
      }
    } catch (error) {
      dispatch({ type: 'NEWIMAGE_FALSE' });
      dispatch({ type: 'LOADING_FALSE' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.query) return;
    if (state.page === 1) {
      fetchPhotos();
      return;
    }
    dispatch({ type: 'RESET_PAGE' });
  };

  const queryChange = (e) => {
    dispatch({ type: 'SEARCH_FORM', payload: e.target.value });
  };

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line
  }, [state.page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!state.newImages) return;
    if (state.loading) return;
    dispatch({ type: 'ADD_PAGE' });
    // eslint-disable-next-line
  }, [state.newImages]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      dispatch({ type: 'NEW_IMAGES' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={{ ...state, handleSubmit, queryChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
