import axios from "axios";
import API from ".";
import { API_URL, TOKEN_KEY } from "../configs/constant";
import { ILogin, IRegister } from "../models/auth";

// Authentication services

let token: string | null = localStorage.getItem(TOKEN_KEY);
let authHeader = { Authorization: `Bearer ${token}` };
const AuthService = {
  async login(data: ILogin) {
    // console.log("log service", localStorage.getItem(TOKEN_KEY));
    // return await API.post("/auth/login", data);
    return await axios.post(`${API_URL}/auth/login`, data);
  },

  async signup(data: IRegister) {
    // console.log("data",data);
    return await axios.post(`${API_URL}/auth/signup`, data);
  },
};

// User services
const UserService = {
  async getList() {
    // return await API.get(`/user`);
    return await axios.get(`${API_URL}/user`, {
      headers: authHeader,
    });
  },
  async getByID(id: string | undefined) {
    // return await API.get(`/user/mutual/${id}`);
    return await axios.get(`${API_URL}/user/mutual/${id}`, {
      headers: authHeader,
    });
  },
};

const RequestService = {
  async getList(slug: string | undefined = "") {
    const params: any = {};
    if (slug) params.slug = slug;
    // return await API.get(`/request`, { params });

    return await axios.get(`${API_URL}/request`, {
      params: params,
      headers: authHeader,
    });
  },
  async edit(id: string, slug: string | undefined = "") {
    const params: any = {};
    if (slug) params.slug = slug;
    // return await API.put(`/request/${id}`, params);
    return await axios.put(`${API_URL}/request/${id}`, params, {
      headers: authHeader,
    });
  },
  async getSuggestionList() {
    // return await API.get(`/request/suggestion`);

    return await axios.get(`${API_URL}/request/suggestion`, {
      headers: authHeader,
    });
  },
};

export { AuthService, UserService, RequestService };
