<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore();
userStore.SetUsers();


</script>
<template>
    <div class="users">
        <div class="users-card" v-for="users in userStore.users" :key="users.id">
            <h2>Nombre: {{ users.name }}</h2>
            <h2>Username: {{ users.username }}</h2>
            <h2>Email: {{ users.email }}</h2>

        </div>
        
 
    </div>
</template>
<style scoped>
</style>
