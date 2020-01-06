import { removeToken, getToken } from "./token";
// import api from "../config/api";
// import axios from "axios";

// const baseUrl = process.env.API_URL || "http://127.0.0.1:3333/";

export const login = async (user, password, redirect) => {
  try {
    // const res = await api.post("/sessions", user, password);
    // const { token } = res;
    // saveToken(token);
    // redirect();
  } catch (err) {
    redirect();
  }
};

export const logout = redirect => {
  setTimeout(redirect, 200);
  removeToken();
};

export const hasAuthentication = () => {
  const token = getToken();
  if (token) {
    return token.length > 1;
  }
  return false;
};
