import axios from "./axios";

function getLatest() {
  return axios.get("/news/latest");
}

function getDetail(id) {
  return axios.get(`/news/${id}`);
}

function getBefore(lastTime) {
  return axios.get(`/news/before/${lastTime}`);
}

const api = {
  getLatest,
  getDetail,
  getBefore,
};

export default api;
