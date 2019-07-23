export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as APIUtil from '../util/todo_api_util';
import receiveErrors from './error_actions'

export function receiveTodos(todos = []) {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export function receiveTodo(todo = null) {
  return {
    type: RECEIVE_TODO,
    todo
  }
}

export function fetchTodosAC() {
  return (dispatch) => {
    APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
  }
}

export function addTodoAC(todo) {
  debugger
  return (dispatch) => {
    return APIUtil.addTodo(todo).then(todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON)))
  }
}

window.fetchTodosAC = fetchTodosAC;