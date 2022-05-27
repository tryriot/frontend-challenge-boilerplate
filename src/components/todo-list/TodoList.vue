<script setup lang="ts">
import { useTodoListItems } from "@/composables/list-items";
import AddTodo from "./AddTodo.vue";
import TodoListItem from "./TodoListItem.vue";

const { items, addItem, removeItem, toggleItem } = useTodoListItems();
</script>

<template>
  <div class="flex flex-col">
    <add-todo @add="addItem" />

    <div class="flex flex-col pt-10 divide-y divide-[#eee]">
      <div v-for="(item, i) in items" :key="i">
        <todo-list-item
          :item="item"
          @toggle-status="toggleItem(i)"
          @remove-item="removeItem(i)"
          :class="{
            'rounded-t-lg': i === 0,
            'rounded-b-lg': i === items.length - 1,
          }"
        />
      </div>
    </div>
  </div>
</template>
