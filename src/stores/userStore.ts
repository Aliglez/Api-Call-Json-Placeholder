import UserService from "@/assets/Services/UserService";
import UserRepository from "@/assets/repositories/UserRepository";
import User from "@/models/User";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore('users', ()=> {
    const repository =  new UserRepository()
    const service = new UserService(repository)

    let users: User[] = reactive<User[]>([])
    const isLoaded = ref(false)

    async function setUsers(this: any): Promise<void> {
    const data = await service.index()
        isLoaded.value = true

        if (data != null) {
            console.log(data)
            this.users = data;
        }
    }

    return {users, isLoaded, setUsers}

})
