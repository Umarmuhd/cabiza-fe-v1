import { API_URL } from "@/config/index";
import axios from "axios";
import dayjs from "dayjs";
import cookie from "cookie";
import Cors from "cors";
import initMiddleware from "../../libs/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, req.body);

      if (response.status === 200) {
        const refreshToken = response.data.refreshToken;

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("__refresh_token", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 10 * 336, //
            sameSite: "strict",
            path: "/",
            expires: dayjs().add(14, "days").toDate(),
            sameSite: "lax",
          })
        );

        const { user, accessToken } = response.data;

        return res.status(200).json({ user, token: accessToken });
      } else {
        return res.status(400).json({ data: response.data });
      }
    } catch (error) {
      if (error.errno === -4078) {
        return res.status(309).json({ message: "network error" });
      }

      return res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
};
