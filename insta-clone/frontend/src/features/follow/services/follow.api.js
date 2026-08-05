import  axios  from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function getFollowingList() {
  try {
    const response = await api.get("/users/following-list");
    return response.data;
    
  } catch (err) {
    console.error(err);
  }   
}


export async function getFollowerList() {
  try{
    const response = await api.get("/users/followers-list");
    return response.data
  }
  catch(err){
    console.error(err)
  }
}