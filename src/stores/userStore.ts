import UserService from "@/assets/Services/UserService";
import UserRepository from "@/assets/repositories/UserRepository";
import type User from "@/models/User";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore('users', ()=> {
    const repository =  new UserRepository
    const service = new UserService(repository)

    const users: User[] = reactive([])
    const isLoaded = ref(false)

    async function SetUsers(this: any): Promise<User[]> {
        this.users = await service.index()
        isLoaded.value = true
        return await service.index()
        
    }

    return {users, isLoaded, SetUsers}

})