<script setup lang="ts">
import type User from '@/models/User';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';


const userStore =useUserStore()

const searchUserId = ref()

const foundUserId = ref()
const foundName = ref()
const foundUserName = ref()
const foundUserEmail = ref()

const search = (): void => {
    const searchedUser: User | undefined = userStore.users.find((user: User) => user.id == searchUserId.value);
    if (searchedUser == undefined) {
        alert ("There i no user with this ID in database")
    }
    foundUserId.value = searchedUser?.id;
    foundName.value = searchedUser?.name;
    foundUserName.value = searchedUser?.username;
    foundUserEmail.value = searchedUser?.email;

}

</script>
<template>
    <div class="search-contain">
        <input type="text" name="search" id="search" v-model="searchUserId">
        <button @click="search()">Search by Id</button>
   </div>
   <table v-if="userStore.isLoaded && foundUserId!=undefined">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>email</th>
    </tr>
    <tr>
        <td>{{ foundUserId }}</td>
        <td>{{ foundName }}</td>
        <td>{{ foundUserName }}</td>
        <td>{{ foundUserEmail }}</td>
    </tr>

   </table>
</template>
<style scoped>
.search-contain {
    display: flex;
    align-items: left;
}
td {
    border: 1px solid black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
}

</style>