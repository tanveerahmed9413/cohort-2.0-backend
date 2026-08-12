import axios from "axios"

const api = axios.create({
    baseURL: "https://moodify-h9nd.onrender.com",
    withCredentials: true
})



 export async function getAllSongs() {
    const response = await api.get("/api/songs")
    return response.data.songs
}




