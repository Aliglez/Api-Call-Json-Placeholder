export default class User {
    id: number
    name: string
    username: string
    email: string
    city: string

    constructor (id:number, name: string, username: string, email: string, city:string){
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.city = city

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
    getCity(){
        return this.city
    }

    
}