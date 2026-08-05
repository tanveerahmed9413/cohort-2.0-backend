import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, register, getMe } from "../services/auth.api.js";

export function useAuth() {
  const context = useContext(AuthContext);

  let { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, password) => {
  try {
    setLoading(true);

    const response = await login(username, password);

    console.log("handleLogin response:", response);

    if (response?.user) {
      setUser(response.user);
    }

    return response;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    setLoading(false);
  }
};

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    let response = await register(username, email, password);
    setUser(response.user);
    return response;
    setLoading(false);
  };

  const handleProfile = async () => {
    setLoading(true);
    let response = await getMe();
    setUser(response.user);
    console.log(response.user);
    setLoading(false);
  };

  return { user, loading, handleRegister, handleLogin, handleProfile };
}
