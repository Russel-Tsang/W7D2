export const allTodos = (state) => {
  return Object.keys(state.todos).map(todoKey => state.todos[todoKey])
}
