import axios from "axios";

const url = "http://localhost:4000/api/blogs";

export const fetchBlogPosts = () => axios.get(url);
export const addNewBlogPost = (newBlog) => axios.post(url, newBlog);
export const editSingleBlogPost = (id, editedBlogPost) =>
  axios.patch(`${url}/${id}`, editedBlogPost);
export const upvoteSingleBlogPost = (id) =>
  axios.patch(`${url}/${id}/likedBlogPost`);
  export const DownvoteSingleBlogPost = (id) =>
  axios.patch(`${url}/${id}/DownBlogPost`);
export const removeBlogPost = (id) => axios.delete(`${url}/${id}`);
export const getSinglePost = (id) =>
  axios.get(`${url}/${id}`);
