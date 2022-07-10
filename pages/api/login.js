import { API_URL } from "@/config/index";
import axios from "axios";
import cookie from "cookie";
import Cors from "cors";
import initMiddleware from "../../libs/init-middleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "OPTIONS", "POST"],
  credentials: true,
  withCredentials: true,
  origin: [
    "http://localhost:3000",
    "http://app.localhost:3000",
    "http://umar.localhost:3000",
  ],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const loginHandler = async (req, res) => {
  // await runMiddleware(req, res, cors);
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
            sameSite: "lax",
            domain:
              process.env.NODE_ENV !== "development"
                ? "cabiza.net"
                : "localhost",
            path: "/api/",
          }),
          cookie.serialize("refresh", data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "lax",
            domain:
              process.env.NODE_ENV !== "development"
                ? "cabiza.net"
                : "localhost",
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
