<script setup lang="ts">
import TodoList from "./components/todo-list/TodoList.vue";
</script>

<template>
  <div
    class="flex flex-col items-center py-16 space-y-16 mx-auto bg-dark-blue min-h-screen font-mono"
  >
    <img
      src="https://uploads-ssl.webflow.com/6278dd61c2d8953dae931fbd/6278dd61c2d8956b07932038_logo-purple%201.png"
      class="w-40"
    />

    <TodoList class="w-1/2" />
  </div>
</template>
