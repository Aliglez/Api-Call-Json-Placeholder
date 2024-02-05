import User from "@/models/User"
import UserRepository from "../repositories/UserRepository"

export default class UserService {
    users: User[] = []
    repository = new UserRepository()

    constructor(repository: UserRepository) {
        this.repository = repository
    }

    async index(): Promise<User[]> {
        const users = await this.repository.getAll()

        users.forEach((user: any) => {
            const userToAdd = new User(user.id, user.name, user.username, user.email, user.address.city)
            this.users.push(userToAdd)
            
        });

        return this.users
    }
}