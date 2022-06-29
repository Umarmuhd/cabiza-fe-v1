import cookie from "cookie";

const logout = async (req, res) => {
  if (req.method === "GET") {
    res.setHeader("Set-Cookie", [
      cookie.serialize("access", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/api/",
      }),
      cookie.serialize("refresh", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/api/",
      }),
    ]);

    res.status(200).json({ success: true, message: "logout success" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default logout;
