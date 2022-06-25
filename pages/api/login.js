import { API_URL } from "@/config/index";
import axios from "axios";
import dayjs from "dayjs";
import cookie from "cookie";
import Cors from "cors";
import initMiddleware from "../../libs/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(Cors({ methods: ["GET", "POST", "OPTIONS"] }));

const loginHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const payload = req.body;
      const response = await axios.post(`${API_URL}/auth/login`, payload);

      if (response.status === 200) {
        const data = response.data;

        res.setHeader("Set-Cookie", [
          cookie.serialize("access", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 30,
            sameSite: "strict",
            path: "/api/",
          }),
          cookie.serialize("refresh", data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/api/",
          }),
        ]);

        const { user, accessToken } = response.data;

        return res
          .status(200)
          .json({ success: true, user, token: accessToken });
      } else {
        return res.status(400).json({ success: false, data: response.data });
      }
    } catch (error) {
      if (error.errno === -4078) {
        return res
          .status(309)
          .json({ success: false, message: "Network error" });
      }

      return res
        .status(error.response.status)
        .json({ success: false, message: error.response.data.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
};

export default loginHandler;
