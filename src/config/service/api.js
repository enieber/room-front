import axios from "axios";

const getBaseUrl = () => {
  return axios.create({
    baseURL: "https://room-state.herokuapp.com/api",
    timeout: 10000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const getRequest = async (route, params = {}) => {
  return await getBaseUrl().get(route, {
    params
  });
};

const postRequest = async (route, body, params = {}) => {
  return await getBaseUrl().post(route, {
    params,
    ...body
  });
};

const putRequest = async (route, body, params = {}) => {
  return await getBaseUrl().put(route, {
    params,
    ...body
  });
};

const deleteRequest = async (route, body, params = {}) => {
  return await getBaseUrl().delete(route, {
    params,
    ...body
  });
};

const api = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest
};

export default api;
