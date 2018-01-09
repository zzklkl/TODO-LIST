var todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (opsition, todoText) {
    this.todos[opsition].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function (opsition) {
    this.todos.splice(opsition, 1);
    this.displayTodos();
  },

  toggleCompleted: function (opsition) {
    // this.todos[opsition].completed = !this.todos[opsition].completed;
    var todo = this.todos[opsition];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of complete sodos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // If everything is true,make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }

    // Otherwise,make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

