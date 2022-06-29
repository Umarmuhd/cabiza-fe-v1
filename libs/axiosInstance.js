import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import fetcher from "./fetcher";

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

  const response = await fetcher("/refresh");
  const data = await response.json();

  req.headers.common.Authorization = `Bearer ${data.accessToken}`;
  return req;
});

export default axiosInstance;
