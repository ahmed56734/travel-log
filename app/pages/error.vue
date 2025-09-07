<script setup lang="ts">
const route = useRoute();
const error = (route.query.error as string) || "Something went wrong";
</script>

<template>
  <div
    class="card bg-base-300 container mx-auto mt-4 flex min-h-72 flex-col justify-center items-center gap-4 text-center"
  >
    <div role="alert" class="alert alert-error min-w-1/2">
      <span>Oh no! {{ error }}</span>
    </div>

    <NuxtLink to="/" class="btn btn-primary">
      Go Home
      <Icon name="tabler:arrow-left" />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
