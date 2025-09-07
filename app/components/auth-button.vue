<script setup lang="ts">
import { useAuthStore } from "~/components/app/stores/auth-store";

const { isLoading, signIn } = useAuthStore();
</script>

<template>
  <button :disabled="isLoading" class="btn btn-accent" @click="signIn">
    Sign In With Github
    <span v-if="isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" />
  </button>
</template>

<style scoped>

</style>
