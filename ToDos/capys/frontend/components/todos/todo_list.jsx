import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchTodos()
  }
  
  render() {
    const { todos, addTodo } = this.props;
    
    const list = todos.map((todo) => <TodoListItem key={`todo-${todo.id}`} todo={todo} />)
    
    return (
    <>
      <ul>{list}</ul>
      <TodoForm addTodo={addTodo}/>
    </>
    )

  }

}

export default TodoList