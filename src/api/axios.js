import axios from "axios";
import qs from "qs";
axios.defaults.transformRequest = (data) => qs.stringify(data);
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((res) => {
  let status = res.status;
  if (/2|3/.test(status)) {
    return res.data;
  }
  let text = res.statusText;
  if (text) {
    switch (status) {
      case 404:
        break;
    }
  }
  alert(text ? text : "please check your internet");
  return Promise.reject(text || "net error from api/axios");
});
export default axios;
