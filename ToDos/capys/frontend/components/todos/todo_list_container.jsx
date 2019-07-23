import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';

import { fetchTodosAC, addTodoAC, receiveTodo } from '../../actions/todo_actions'

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: errorsSelector
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodosAC()),
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    addTodo: (todo) => dispatch(addTodoAC(todo)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);