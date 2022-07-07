import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "../config/index";
import axios from "@/libs/axiosInstance";
import fetcher from "@/libs/fetcher";

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
    const response = await fetcher("/logout");

    if (response.status === 200) {
      axios.defaults.headers.common = { Authorization: null };
      setUser(null);
      setLoading(false);
      console.log(router.pathname)
      router.replace("/auth/login");
    }
  };

  const checkUserLoggedIn = async () => {
    try {
      setLoading(true);
      const response = await fetcher("/refresh");

      const data = await response.json();

      if (!response.ok) {
        setUser(null);
        setLoading(false);

        // if (window.location.origin === "http://localhost:3000") {
        //   const error = new Error("Unauthorized");
        //   return error;
        // } else {
        //   router.push("/auth/login");
        // }
        const message = `An error has occured: ${data?.message}`;
        throw new Error(message);
      }

      setTimeout(() => {
        checkUserLoggedIn();
      }, data.expires_in * 1000 - 500);

      axios.defaults.headers.common = {
        Authorization: `Bearer ${data.accessToken}`,
      };
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setUser(null);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout, loading }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
