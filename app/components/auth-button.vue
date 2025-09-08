<script setup lang="ts">
import { useAuthStore } from "~/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <div v-if="!authStore.isLoading && authStore.user" class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-6 rounded-full">
          <img :src="authStore.user.image" alt="avatar">
        </div>
      </div>
      {{ authStore.user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out">
          <Icon name="tabler:logout-2" size="24" />
          Sign out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button v-else :disabled="authStore.isLoading" class="btn btn-accent" @click="authStore.signIn">
    Sign In With Github
    <span v-if="authStore.isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" />
  </button>
</template>

<style scoped>

</style>
