import cookie from "cookie";
import { API_URL } from "@/config/index";

const refresh = async (req, res) => {
  if (req.method === "GET") {
    const cookies = cookie.parse(req.headers.cookie ?? "");
    const refresh = cookies.refresh ?? false;

    if (refresh === false) {
      res.status(401).json({ success: false, message: "Unauthorized request" });
      return;
    }

    const body = JSON.stringify({
      token: refresh,
    });

    try {
      const apiRes = await fetch(`${API_URL}/auth/refresh/token`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 200) {
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
            maxAge: 60 * 60 * 24,
            sameSite: "strict",
            path: "/api/",
          }),
        ]);

        return res.status(200).json({
          success: true,
          message: "Refresh request successful",
          accessToken: data.accessToken,
          user: data.user,
          expires_in: data.expiresIn,
        });
      } else {
        return res
          .status(apiRes.status)
          .json({ success: false, message: "Failed to refresh token" });
      }
    } catch (err) {
      console.log("err:****", err);
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default refresh;