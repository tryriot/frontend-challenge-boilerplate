<script setup lang="ts">
import { ref } from "vue";
import TodoListItemShape from "./TodoListItemShape.vue";

const title = ref("");

const emits = defineEmits(["add"]);

const addItem = () => emits("add", { title });
</script>

<template>
  <form>
    <todo-list-item-shape class="rounded-lg">
      <input
        v-model="title"
        class="focus:outline-none outline-none w-full"
        placeholder="What to you do need to do ?"
      />

      <template #right>
        <button class="cursor-pointer" type="button" @click="addItem">
          submit
        </button>
      </template>
    </todo-list-item-shape>
  </form>
</template>
