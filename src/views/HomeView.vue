<script setup lang="ts">
import SearchById from '@/components/SearchById.vue';
import UserCard from '@/components/UserCard.vue';






</script>

<template>
  <main>
    <div class="container">
      <UserCard/>
      <br>
      <SearchById/>
      
    </div>
    

  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
