import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { NEXT_URL } from "@/config/index";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (req) => {
  const access = (req.headers.common.Authorization || "").replace(
    /^Bearer\s/,
    ""
  );

  if (!access) {
    req.headers.common.Authorization = `Bearer ${access}`;
    return req;
  }

  const user = jwt_decode(access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  const response = await axios.get(`${NEXT_URL}/api/refresh`);

  console.log(response.data);

  req.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
  return req;
});

export default axiosInstance;
