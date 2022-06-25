import cookie from "cookie";
import { API_URL } from "@/config/index";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const cookies = cookie.parse(req.headers.cookie ?? "");
    const access = cookies.access ?? false;

    if (access === false) {
      res.status(401).json({ success: false, message: "Unauthorized request" });
      return;
    }

    try {
      const apiRes = await fetch(`${API_URL}/user/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access}`,
        },
      });
      const data = await apiRes.json();

      if (apiRes.status === 200) {
        return res
          .status(200)
          .json({ success: true, user: data.user, message: "user data" });
      } else {
        return res.status(apiRes.status).json({
          success: false,
          message: data.error,
        });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
