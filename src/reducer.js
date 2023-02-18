const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'NEW_RESULTS_BY_SEARCH') {
    return {
      ...state,
      photos: action.payload,
      loading: false,
      newImages: false,
    };
  }
  if (action.type === 'SEARCH_RESULTS') {
    const newPhotos = [...state.photos, ...action.payload];
    return { ...state, photos: newPhotos, loading: false, newImages: false };
  }
  if (action.type === 'FETCH_PHOTOS') {
    const newPhotos = [...state.photos, ...action.payload];
    return { ...state, photos: newPhotos, loading: false, newImages: false };
  }

  if (action.type === 'NEWIMAGE_FALSE') {
    return { ...state, newImages: false };
  }
  if (action.type === 'LOADING_FALSE') {
    return { ...state, loding: false };
  }
  if (action.type === 'ADD_PAGE') {
    const newPage = state.page + 1;
    return { ...state, page: newPage };
  }
  if (action.type === 'RESET_PAGE') {
    return { ...state, page: 1 };
  }
  if (action.type === 'SEARCH_FORM') {
    return { ...state, query: action.payload };
  }
  if (action.type === 'NEW_IMAGES') {
    return { ...state, newImages: true };
  }
  throw new Error('there is no such type action');
};

export default reducer;
