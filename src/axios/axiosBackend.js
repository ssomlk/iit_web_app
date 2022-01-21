import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = ['*'];
// axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET,POST';

const mainAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}/api`,
});
mainAxios.CancelToken = axios.CancelToken;

const recaptchaAxios = axios.create({
  baseURL: `https://www.google.com/recaptcha/api`,
});
mainAxios.CancelToken = axios.CancelToken;

export { mainAxios, recaptchaAxios };
