import {
   legacy_createStore as createStore,
   applyMiddleware,
   compose
} from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

//Save store to local storage

function saveToLocalStorage(store) {
   try {
      const serializedStore = JSON.stringify(store);
      window.localStorage.setItem('store', serializedStore);
   } catch (e) {
      console.log(e);
   }
}

//Load store from local storage

function loadFromLocalStorage() {
   try {
      const serializedStore = window.localStorage.getItem('store');
      if (serializedStore === null) return undefined;
      return JSON.parse(serializedStore);
   } catch (e) {
      console.log(e);
      return undefined;
   }
}

//Make store persistent

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

//Create store

const store = createStore(
   reducers,
   persistedState,
   composeEnhancers(applyMiddleware(thunk))
);

//Subscribe to store

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

