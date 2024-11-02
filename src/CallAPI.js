import axios from "axios";

class CallAPI {
    static BASE_URL = "http://localhost:8080";

    static async login(email, password){
        try {
            const response = await axios.post(`${CallAPI.BASE_URL}/api/auth/login`, { email, password });
            console.log("Full response received:", response); // Log the entire response

            console.log("Token received:", response.data.token);
            console.log("User ID received:", response.data.userId);


            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            console.log(localStorage.getItem("token"));
            console.log(localStorage.getItem("userId")); // should log the correct userId



            return response.data.token;  // Assumes response.data is a token string
        } catch (error) {
            console.error("Error during login:", error);
            if (error.response) {
                throw new Error(error.response.data || "Login failed. Please try again.");
            } else {
                throw new Error("Network error. Please check your connection.");
            }
        }
    }

    static async register(userData) {
        try {
            const response = await axios.post(`${CallAPI.BASE_URL}/api/auth/register`, userData);
            console.log("Registration response:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            if (error.response) {
                throw new Error(error.response.data || "Registration failed. Please try again.");
            } else {
                throw new Error("Network error. Please check your connection.");
            }
        }
    }

    static async getAllContacts() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        console.log("Token:", token);
        console.log("User ID:", userId);

        try {
            const response = await axios.get(`${CallAPI.BASE_URL}/api/users/${userId}/contact`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching contacts:", error);
            throw new Error(error.response?.data || "Failed to fetch contacts.");
        }
    }

    static async getContactById(contactId) {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        try {
            const response = await axios.get(`${CallAPI.BASE_URL}/api/users/${userId}/contact/${contactId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching contact details:", error);
            throw new Error(error.response?.data || "Failed to fetch contact details.");
        }
    }


    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    static isAuthenticated() {
        return !!localStorage.getItem("token");
    }

}

export default CallAPI;
