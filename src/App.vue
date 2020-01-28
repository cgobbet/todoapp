<template> </template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo;''
    };
  },
  methods: {
    addTodo() {
      this.todos.push({id: this.todos.length, label: this.currentTodo, completed: false});
      this.currentTodo = '';
    }
  }
};
</script>

<style></style>
