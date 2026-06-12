import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login,register } from "../services/auth.api.js";





export function useAuth(){
    const context = useContext(AuthContext)

    let {user,setUser,loading,setLoading} = context


    const handleLogin = async(username,password)=>{
        setLoading(true)
        let response = await login(username,password)
        setUser(response.user)
        return response
        setLoading(false)
    }

    

    const handleRegister = async(username,email,password)=>{
        setLoading(true)
        let response = await register(username,email,password)
        setUser(response.user)
        setLoading(false)
    
    }

    return (
        {user,loading,handleRegister,handleLogin}
    )

    
}