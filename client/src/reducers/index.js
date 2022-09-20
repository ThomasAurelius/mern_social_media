import { combineReducers } from 'redux';

import postReducer from './PostReducer';
import authReducer from './AuthReducer';

export const reducers = combineReducers({ authReducer, postReducer });