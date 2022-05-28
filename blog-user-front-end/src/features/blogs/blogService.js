// Service file is solely responsible for making the http request, sending any info. back and setting data in local storage.

import axios from 'axios';

const API_URL = '/api/blogs/';

const createBlog = async (blogData) => {
  const response = await axios.post(API_URL, blogData);

  // axios puts data inside an object called data
  if (response.data) {
    localStorage.setItem('blog', JSON.stringify(response.data));
  }

  return response.data;
};
