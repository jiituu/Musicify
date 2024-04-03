// src/redux/reducers.js

import { combineReducers } from '@reduxjs/toolkit';
// import songReducer from './songSlice';

import { musicData } from './reducers';



export default combineReducers({
    musicData,
})