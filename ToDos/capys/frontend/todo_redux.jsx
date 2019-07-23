import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions'
import * as APIUtil from './util/todo_api_util'


const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.fetchTodos = APIUtil.fetchTodos;
window.addTodo = APIUtil.addTodo

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  
  ReactDOM.render(<Root store={ store }/>, root);

  // ReactDOM.render(<h1>Hello my dudes</h1>, root);
});



