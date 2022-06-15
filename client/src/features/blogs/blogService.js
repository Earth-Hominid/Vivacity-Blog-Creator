// Service file is solely responsible for making the http request, sending any info. back and setting data in local storage.

import axios from 'axios';

const API_URL = '/api/blogs/';

// Create new blog
const createBlog = async (blogData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, blogData, config);

  return response.data;
};

// Get user blogs
const getBlogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user blog

const deleteBlog = async (blogId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + blogId, config);

  return response.data;
};

const updateBlog = async (blogId, blogData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + '/' + blogId, blogData, config);

  return response.data;
};

const blogService = { createBlog, getBlogs, deleteBlog, updateBlog };

export default blogService;
