<template>
<div id="app">
  <div class="main-container">
    <div class="header md-elevation-4">
      <h1 class="md-title">{{ header }}</h1>
    </div>
    <div class="todo-list">
      <div class="row">
      </div>
      <div class="row">
        <!-- add new todo with enter key -->
        <md-field class="todo-input">
          <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo! It's easy!" />
        </md-field>
        <!-- for all todos, set class of edited todos -->
        <ul class="todos">
          <div class="list-div">
            <li v-for="todo in todos" :key="todo.id">
              <!-- binds checkbox to todo model after each instance; -->
              <input class="toggle-todo" type="checkbox" v-model="todo.completed" />
              <!-- starts editing process on double click -->
              <span class="todo-item-label" :class="{ completed: todo.completed }" @dblclick="editTodo(todo)" v-if="!todo.edit">{{ todo.label }}</span>
              <!-- concludes editing with enter click -->
              <input v-else class="todo-item-edit" type="text" v-model="todo.label" @keyup.enter="completedEdit(todo)" />
              <!-- deletes todos using removeTodo method -->
              <!-- <button @click="removeTodo(todo)">Delete</button> -->
              <!-- <md-icon class="delete-todo" @click="removeTodo(todo)">remove_circle_outline</md-icon> -->
              <!-- <img src="http://pluspng.com/img-png/delete-button-png-delete-icon-16.jpg" alt="remove toDo" @click="removeTodo(todo)" width="16" height="16"> -->
              <i class="material-icons" alt="remove toDo" @click="removeTodo(todo)">
                delete
              </i>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RegularToolbar',
  data() {
    return {
      header: "A VueJS ToDo App",
      todos: [],
      currentTodo: "",
      completed: false, // add a completed property
      editedToDo: null // add a edited property
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false, // initializes property
        edit: false // initializes property
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      // allows users to remove todos
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.edit = true;
    },
    completedEdit(todo) {
      todo.edit = false;
    }
  },
  watch: {
    todos: {
      handler() {
        // console.log('Todos changed!');
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
img {
    vertical-align: middle;
    // width: 1.5em;
    // height: 1.5em;
}

h1 {
    font-family: 'Anton', sans-serif;
    font-size: 5em;
}

li {
    list-style: none;
}

.md-title {
  color: white;
  font-size: 3em;
}

.header {
    display: flex;
    height: auto;
    background-color: #8B0000;
    color: white;
    justify-content: center;
    margin-top: 0.8em;
    margin-left: 0.8em;
    margin-right: 0.8em;
}
.material-icons {
    vertical-align: middle;
}

.md-input {
    font-family: 'Roboto', sans-serif;
    margin-left: 1em;
    /* width: 80%; */
}

.md-field.md-theme-default:after {
    margin-left: 1em;
}

.md-focused,
.md-has-placeholder,
.md-theme-default {
    margin-left: 1em;
    width: 75%;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 2em;
}
.todo-item-edit,
.todo-item-label {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
    margin-left: 0.2em;
    margin-right: 0.1em;
    // line-height: 1em;
    width: 75%;
    vertical-align: top;
}

.delete-todo {
    margin-left: 0.2em;
    justify-content: center;
    width: 0;
}

.toggle-todo {
    vertical-align: middle;
}
</style>
