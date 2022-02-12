import cookie from "cookie";
import { API_URL } from "@/config/index";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { __refresh_token } = cookie.parse(req.headers.cookie);

    const response = await axios.post(`${API_URL}/auth/refresh/token`, {
      token: __refresh_token,
    });

    if (response.status === 200) {
      const { token, user, expires_in } = response.data;

      res.status(200).json({ token, user, expires_in });
    } else {
      res.status(403).json({ message: "user forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
