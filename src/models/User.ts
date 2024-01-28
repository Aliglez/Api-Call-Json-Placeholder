export default class User {
    id: number
    name: string
    username: string
    email: string

    constructor (id:number, name: string, username: string, email: string){
        this.id = id
        this.name = name
        this.username = username
        this.email = email
    }

    getId(){
        return this.id
    }

    getName() {
        return this.name
    }

    getUsername(){
        return this.username
    }
    getEmail(){
        return this.username
    }

    
}