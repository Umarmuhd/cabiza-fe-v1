import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { NEXT_URL } from "../config/index";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => checkUserLoggedIn(), []);

  const loginUser = (user, token) => {
    setUser(user);
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  };

  const logout = async () => {
    setLoading(true);
    const res = await axios.get(`${NEXT_URL}/api/logout`, {
      withCredentials: true,
      credentials: "include",
      method: "GET",
    });

    if (res.status === 200) {
      axios.defaults.headers.common = { Authorization: null };
      setUser(null);
      setLoading(false);
      router.replace("/");
    }
  };

  const checkUserLoggedIn = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${NEXT_URL}/api/user`, {
        withCredentials: true,
        credentials: "include",
        method: "GET",
      });

      console.log(res.data);

      setTimeout(() => {
        checkUserLoggedIn();
      }, res.data.expires_in * 1000 - 500);

      if (res.status === 200) {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${res.data.token}`,
        };
        setUser(res.data.user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
