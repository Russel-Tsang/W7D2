export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: "api/todos"
  }) 
}

export const addTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: "api/todos",
    data: {
      todo
    }
  })
}

