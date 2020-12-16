let initialState = {
  todos: [{ id: 0, title: 'hola', date: '2020-12-10' }],
  index: 0,
};

const todoReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_TODO':
      console.log('---------->  actions.payload:', actions.payload);
      state.todos = [...state.todos, actions.payload];
      return state;

    case 'DELETE_TODO':
      state.todos = initialState.todos.filter(
        (todo) => todo.id !== actions.payload
      );
      return state;

    case 'UPDATE_TODO':
      const updateTodo = [...state.todos];
      let index = -1;
      for (let i = 0; i < updateTodo.length; i++) {
        index++;
        if (updateTodo[i].id === actions.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        updateTodo[index] = actions.payload;
        state.todos = [...updateTodo];
        return state;
      }
      return state;

    default:
      return state;
  }
};

export default todoReducers;
