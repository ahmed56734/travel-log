<script setup lang="ts">
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
</style>
