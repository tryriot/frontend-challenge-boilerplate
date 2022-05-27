<script setup lang="ts">
import { TodoListItem, TodoListItemStatus } from "@/composables/list-items";
import { computed } from "vue";
import TodoListItemShape from "./TodoListItemShape.vue";
import TodoListItemStatusIndicator from "./TodoListItemStatusIndicator.vue";
import TodoListTrashItem from "./TodoListTrashItem.vue";

const props = defineProps<{ item: TodoListItem }>();

defineEmits(["toggle-status", "remove-item"]);

const isCompleted = computed(
  () => props.item.status === TodoListItemStatus.COMPLETED
);
</script>

<template>
  <todo-list-item-shape class="relative group">
    <span :class="{ 'line-through': isCompleted }">{{ item.title }}</span>

    <template #right>
      <todo-list-item-status-indicator
        :status="item.status"
        @toggle-status="$emit('toggle-status')"
      />
    </template>

    <todo-list-trash-item
      class="group-hover:translate-x-0 -translate-x-12 transition transform duration-500 opacity-0 group-hover:opacity-100"
      @remove-item="$emit('remove-item')"
    />
  </todo-list-item-shape>
</template>
