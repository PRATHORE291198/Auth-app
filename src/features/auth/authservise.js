import axios from "axios";


export const register = async (formData) => { 

    const response = await axios.post("/api/user/register",formData);
    localStorage.setItem("user" , JSON.stringify(response.data));
     return response.data;   
}; 