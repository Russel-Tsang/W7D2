import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux'
import { fetchTodosMW } from '../middleware/thunk'



function configureStore() {
  const initialState = {
    todos: {1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    },
  }};
  console.log(initialState);
  return createStore(rootReducer, initialState, applyMiddleware(fetchTodosMW,logger));
}

export default configureStore;