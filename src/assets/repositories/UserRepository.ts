
import type { URL } from "url";

export default class UserRepository {
    
    // uri: string | URL | Request = import.meta.env.API_ENDPOINT_PLACEHOLDER
    uri: string | URL | Request = 'https://jsonplaceholder.typicode.com/users'

    async getAll(){
        try {
            const response = await fetch(this.uri);
            const data = await response.json();
            return data;
           
        }
        catch (error){
            throw new Error(`Could not get products`)
        }     
    }
    
}

