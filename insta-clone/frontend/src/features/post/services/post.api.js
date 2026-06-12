import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})



export async function getFeed() {

    try{
        const response = await api.get("/posts/allPost")
        
        return response.data
    }
    catch(err){
        console.log(err)
    }
    
}

export async function createPost(imageFile,caption) {
    
    let formData = new FormData()

    formData.append('image',imageFile)
    formData.append('caption',caption)

    const response = await api.post("/posts",formData)
    return response.data
}