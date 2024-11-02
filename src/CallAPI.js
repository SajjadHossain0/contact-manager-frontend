import axios from "axios";

class CallAPI {
    static BASE_URL = "http://localhost:8080";

    static async login(email, password){
        try {
            const response = await axios.post(`${CallAPI.BASE_URL}/api/auth/login`, { email, password });
            console.log("Token received:", response.data);

            // Save token and userId (assuming userId is part of the response)
            localStorage.setItem("token", response.data.token); // Adjust this based on your response structure
            localStorage.setItem("userId", response.data.userId); // Save the userId

            return response.data;  // Assumes response.data is a token string
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

    // Set the user's ID and token for authentication
    static setUser(userId, token) {
        this.userId = localStorage.getItem("userId");
        this.token = localStorage.getItem("token");
    }

    static async getContactByUser() {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
            throw new Error("User not authenticated");
        }

        try {
            const response = await axios.get(`${CallAPI.BASE_URL}/${userId}/contact`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log("Contacts retrieved:", response.data); // Log the response data
            return response.data; // Ensure this returns the expected contacts list
        } catch (error) {
            console.error("Error during get contactByUser:", error);
            throw new Error(error.response?.data || "Failed to fetch contacts.");
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
