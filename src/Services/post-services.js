import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://44.201.153.46:8081/api-dev/v1/auth/posts";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/private", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;