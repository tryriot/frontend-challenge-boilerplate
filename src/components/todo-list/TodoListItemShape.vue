<template>
  <div class="flex items-center bg-[#fff] px-5 py-4 divide-x divide-[#eee]">
    <div class="flex-1"><slot /></div>
    <div class="pl-3"><slot name="right" /></div>
  </div>
</template>
