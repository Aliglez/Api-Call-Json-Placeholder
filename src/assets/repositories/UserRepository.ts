export default class UserRepository {
    uri = import.meta.env.API_ENDPOINT_PLACEHOLDER

    async getAll() {
        try {
            const response = await fetch(this.uri);
            const data = await response.json();
            return data;
        }
        catch (error){
            throw new Error(`Could not get products: ${error}`)
        }     
    }
    
}

