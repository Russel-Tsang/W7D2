import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {    
  1: {
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
};


export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO: {
      let newState = merge({}, state);
      debugger
      newState[action.todo.id] = action.todo;
      debugger
      return newState;
    }
    case RECEIVE_TODOS: {
      let newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      }) 
      return newState;
    }
    default:
      return state;
  }
}