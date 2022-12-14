import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      if(user===null) return null
      return {
        user
      };
    },
  },
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    setMovieList: (state, action) => {
      const movies = action.payload;
      if(movies===null) return null
      return [...movies]
      
    },
  },
});

const searchListSlice = createSlice({
  name: 'searchList',
  initialState: [],
  reducers: {
    setSearchList: (state, action) => {
      const movies = action.payload;
      if(movies===null) return null
      return [...movies]
      
    },
  },
});


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme: state.activeTheme === 'light' ? 'dark' : 'light',
      };
    },
  },
});


export const {setUser} = userSlice.actions;
export const {toggleTheme} = themeSlice.actions;
export const {setMovieList} = movieSlice.actions;
export const {setSearchList} = searchListSlice.actions;
export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    movie: movieSlice.reducer,
    searchList: searchListSlice.reducer,
  }),
});