<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    uri: string;
    icon: string;
    label: string;
    showLabel?: boolean;
  }>(),
  {
    showLabel: true,
  },
);
const route = useRoute();
</script>

<template>
  <NuxtLink
    :to="props.uri"
    :class="{
      'bg-base-200': route.path === props.uri,
      'tooltip': !props.showLabel,
    }"
    class="btn btn-ghost tooltip-right justify-start"
    :data-tip="props.label"
  >
    <div class="flex items-center min-w-6 h-6">
      <Icon :name="props.icon" size="24" class="flex-shrink-0" />
    </div>
    <Transition
      enter-active-class="transition-all duration-200 ease-in-out"
      leave-active-class="transition-all duration-200 ease-in-out"
      enter-from-class="w-0 opacity-0"
      enter-to-class="w-auto opacity-100"
      leave-from-class="w-auto opacity-100"
      leave-to-class="w-0 opacity-0"
    >
      <span v-if="props.showLabel" class="whitespace-nowrap">
        {{ props.label }}
      </span>
    </Transition>
  </NuxtLink>
</template>

<style scoped>
/* No need for custom keyframes anymore as we're using Tailwind transitions */
</style>
