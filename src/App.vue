<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/userStore';
import { onBeforeMount } from 'vue';

const usersStore = useUserStore()

onBeforeMount(async() => {
  await usersStore.SetUsers()
})
</script>

<template>

  <RouterView />
</template>

<style scoped>
</style>
