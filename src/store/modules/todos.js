const todos = {
  state: {
    todos: [],
    filter: 'all'
  }, /*данные которые используются внутри приложения*/
  actions: {}, /*методы,кот описывают то,что с данными происходит*/
  getters: {}, /*нужны чтобы можно было вынимать данные из общих данных приложения*/
  mutations:{
    addTodo(state, todo){
      state.todos.push(todo);
    },
    removeTodo(state, todoId){
      state.todos = state.todos.filter(item => item.id !== todoId);
    },
    checkTodo(state, todo) {
      state.todos = state.todos.map(item => (item.id == todo.id ? todo : item));
    },
    filterTodos(state, filter){
      state.filter = filter;
    }
  } /*для описания методов, изменяющих наше приложение*/
}

export default todos;