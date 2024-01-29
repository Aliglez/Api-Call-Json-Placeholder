import User from "@/models/User"
import UserRepository from "../repositories/UserRepository"

export default class UserService {
    users: User[] = []
    repository = new UserRepository()

    constructor(repository: UserRepository) {
        this.repository = repository
    }

    async index() {
        const users = await this.repository.getAll()

        users.forEach((user: { id: number; name: string; username: string; email: string }) => {
            const userToAdd = new User(user.id, user.name, user.username, user.email)
            this.users.push(userToAdd)
            
        });

        return this.users
    }
}