<script setup lang="ts">
import { TodoListItemStatus } from "@/composables/list-items";
import { propsToAttrMap } from "@vue/shared";
import { computed } from "vue";
import IconCheckmark from "@/components/icons/IconCheckmark.vue";

const props = defineProps<{ status: TodoListItemStatus }>();
const emits = defineEmits(["toggle-status"]);

const isCompleted = computed(
  () => props.status === TodoListItemStatus.COMPLETED
);

const toggleItem = () => emits("toggle-status");
</script>

<template>
  <div
    class="rounded-full w-6 h-6 border border-[#808080] cursor-pointer flex justify-center items-center transition duration-500"
    :class="{ 'bg-dark-blue': isCompleted }"
    @click="toggleItem"
  >
    <icon-checkmark class="-ml-1 -mt-1" />
  </div>
</template>
