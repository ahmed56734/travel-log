<script setup lang="ts">
const isSidebarOpen = ref(false);

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}
</script>

<template>
  <div class="flex flex-1">
    <!--    side bar -->
    <div
      class="bg-base-100 transition-all duration-300"
      :class="{ 'w-64': isSidebarOpen, 'w-16': !isSidebarOpen }"
    >
      <!--      side bar icon -->
      <div
        class="flex hover:cursor-pointer hover:bg-base-200"
        :class="{
          'justify-end': isSidebarOpen,
          'justify-center': !isSidebarOpen,
        }"
        @click="toggleSidebar"
      >
        <Icon v-if="isSidebarOpen" name="tabler:chevron-left" size="42" />
        <Icon v-else name="tabler:chevron-right" size="32" />
      </div>
      <div class="flex flex-col gap-0.5">
        <sidebar-button
          :show-label="isSidebarOpen"
          icon="tabler:map"
          label="Locations"
          uri="/dashboard"
        />
        <sidebar-button
          :show-label="isSidebarOpen"
          icon="tabler:circle-plus-filled"
          label="Add Location"
          uri="/dashboard/locations"
        />

        <div class="divider" />

        <SidebarButton
          :show-label="isSidebarOpen"
          icon="tabler:logout-2"
          label="Sign Out"
          uri="/log-out"
        />
      </div>
    </div>

    <!--    main content -->
    <div class="flex-1" />
  </div>
</template>

<style scoped></style>
