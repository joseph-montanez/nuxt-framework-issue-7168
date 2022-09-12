<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
</style>

<script setup lang="ts">
import {useColorSchemeModes} from "~/composables/useDarkMode.js";
import {watch} from "vue";
import {useRoute} from "#app";

const colorScheme = useColorSchemeModes();
const route = useRoute();
watch(route, (to, from) => {
  // console.log('route change', to.fullPath, from.fullPath);
})
</script>