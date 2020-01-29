<template>
<div class="container">
  <div class="todo-list">
    <div class="row">
      <div class="header">
        <h1>{{ header }}</h1>
      </div>
    </div>
    <div class="row">
      <!-- add new todo with enter key -->
      <input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo!" />
      <!-- for all todos, set class of edited todos -->
      <ul class="todos">
        <li v-for="todo in todos" :key="todo.id" :class="{ editing: todo == editedTodo }">
          <!-- binds checkbox to todo model after each instance; -->
          <input class="toggle-todo" type="checkbox" v-model="todo.completed" />

          <!-- starts editing process on double click -->
          <span class="todo-item-label" :class="{ completed: todo.completed }" @dblclick="editTodo(todo)" v-if="!todo.edit" >{{ todo.label }}</span>
          <!-- concludes editing with enter click -->
          <input
              v-else
              class="todo-item-edit"
              type="text"
              v-model="todo.label"
              @keyup.enter="completedEdit(todo)" />
              <!-- deletes todos using removeTodo method -->
              <button @click="removeTodo(todo)">Delete</button>
              <!-- <img src="http://pluspng.com/img-png/delete-button-png-delete-icon-16.jpg" alt="remove toDo" width="64" height="64" @click="removeTodo(todo)"> -->
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      header: "A VueJS TaskList App",
      todos: [],
      currentTodo: "",
      completed: false, // add a completed property
      editedToDo: null // add a edited property
    };
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
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>
