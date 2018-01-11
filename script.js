var todoList = {
  todos: [],

  addTodo: function addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function (opsition, todoText) {
    this.todos[opsition].todoText = todoText;
  },

  deleteTodo: function (opsition) {
    this.todos.splice(opsition, 1);
  },

  toggleCompleted: function (opsition) {
    // this.todos[opsition].completed = !this.todos[opsition].completed;
    var todo = this.todos[opsition];
    todo.completed = !todo.completed;
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

var handlers = {
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },

  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },

  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },

  deleteTodo: function(opsition) {
    todoList.deleteTodo(opsition);
    view.displayTodos();
  },

  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  }
};

var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },

  createDeleteButton: function () {
    deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setUpEvenListeners: function () {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      //获得单击的元素
      var elementClicked = event.target;

      //确认单击的是不是删除按钮
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEvenListeners();