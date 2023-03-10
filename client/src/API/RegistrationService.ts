import axios from "axios";

export class RegistrationService{

    static async registration(email: string, password: string, surname: string, name: string){
        const response = await axios.post(`http://localhost:4000/registration?email=${email}&password=${password}&surname=${surname}&name=${name}`);
        
        return response.data
    }
}