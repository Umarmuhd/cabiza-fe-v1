import { createContext, useState } from "react";
import { useRouter } from "next/router"
import axios from "axios";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // axios.defaults.withCredentials = true;

    const loginUser = (token) => {
        axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
        const result = jwt_decode(token)
        setUser(JSON.parse(result["http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"]));
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, loading, }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );


}

export default AuthContext;