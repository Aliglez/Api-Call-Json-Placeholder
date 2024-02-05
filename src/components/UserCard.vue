<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore();
userStore.setUsers();


</script>

<template>
    <div class="users">
                
            <tr>
                <div v-if="userStore.isLoaded" class="users-card" v-for="users in userStore.users" :key="users.id" id="data_contain">
                    <td id="celda"><h3>{{ users.name }}</h3></td>
                    <td id="celda"><h3>{{ users.username }}</h3></td>
                    <td id="celda"><h3>{{ users.email }}</h3></td>
                </div>
            </tr>
           
        
    </div>
</template>
<style scoped>


tr, .users-card {
    width: 100%;
}

#celda, th {
    width: 15rem;
}

td {
    width: 15rem;
    border: black solid 1px;
}


</style>
