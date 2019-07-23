import React, { Component } from 'react'
import { uniqueId } from '../../util/util'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    }

    const addTodo = this.props.addTodo(todo)
    addTodo.then(
      () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input type="text" onChange={this.update('title')} value={this.state.title}/>
        </label>
        <label> Description:
          <textarea type="text" placeholder={this.state.body} value={this.state.body} onChange={this.update('body')} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default TodoForm;