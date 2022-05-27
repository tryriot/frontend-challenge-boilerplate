<script setup lang="ts">
import IconTrash from "@/components/icons/IconTrash.vue";

defineEmits(["delete-item"]);
</script>

<template>
  <div
    class="absolute -right-12 top-0 bottom-0 flex items-center justify-center h-full px-2 cursor-pointer"
    @click="$emit('delete-item')"
  >
    <div class="w-7 h-full text-[#fff] flex items-center">
      <icon-trash />
    </div>
  </div>
</template>
