<script setup lang="ts">
import { useAuthStore } from "~/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <button :disabled="authStore.isLoading" class="btn btn-accent" @click="authStore.signIn">
    Sign In With Github
    <span v-if="authStore.isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" />
  </button>
</template>

<style scoped>

</style>
