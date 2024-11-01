import axios from "axios";

class CallAPI {
    static BASE_URL = "http://localhost:8080";

    static async login(email, password){
        try{
            const response = await axios.post(`${CallAPI.BASE_URL}/api/auth/login`, {email, password});
            return response.data;
        }catch(error){
            throw error;
        }
    }

    static async register(userData, token){
        try{
            const response = await axios.post(`${CallAPI.BASE_URL}/api/auth/register`, userData,

                {
                    headers: {Authorization: `Bearer ${token}`}
                });
            return response.data;

        }catch(error){
            throw error;
        }
    }

    /*Check authentication*/
    static logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    static isAuthenticated(){
        const token = localStorage.getItem("token");
        return !!token;
    }

    static isUser(){
        const role = localStorage.getItem("role");
        return role === 'USER'
    }

}


export default CallAPI;