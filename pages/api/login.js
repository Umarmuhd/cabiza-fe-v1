import { API_URL, appKey } from "@/config/index";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { ...req.body, rememberMe: true, },
        { headers: { appKey } }
      );

      if (response.data.status) {
        return res.status(200).json({ token: response.data.data.token });
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
