<script setup lang="ts">
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div
    class="card bg-base-300 container mx-auto mt-4 flex min-h-72 flex-col justify-center items-center gap-4 text-center"
  >
    <span class="loading loading-spinner loading-xl" />
  </div>
</template>

<style scoped></style>
