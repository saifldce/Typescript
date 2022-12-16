import axios from "axios";
import API from ".";
import { API_URL } from "../configs/constant";
import { ILogin, IRegister } from "../models/auth";

// Authentication services
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
    return await axios.get(`${API_URL}/user`);

  },
  async getByID(id: string) {
    // return await API.get(`/user/mutual/${id}`);
    return await axios.get(`${API_URL}/user/mutual/${id}`);

  },
};

const RequestService = {
  async getList(slug: string | undefined = "") {
    const params: any = {};
    if (slug) params.slug = slug;
    return await API.get(`/request`, { params });
  },
  async edit(id: string, slug = "") {
    const params: any = {};
    if (slug) params.slug = slug;
    return await API.put(`/request/${id}`, params);
  },
  async getSuggestionList() {
    return await API.get(`/request/suggestion`);
  },
};

export { AuthService, UserService, RequestService };
