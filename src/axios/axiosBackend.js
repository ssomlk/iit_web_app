import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

const mainAxios = axios.create({
  baseURL: "http://localhost:3000/api",
});
mainAxios.CancelToken = axios.CancelToken;

const recaptchaAxios = axios.create({
    baseURL: "https://www.google.com/recaptcha/api",
});
mainAxios.CancelToken = axios.CancelToken;

export { mainAxios, recaptchaAxios };
