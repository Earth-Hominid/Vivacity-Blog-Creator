// Service file is solely responsible for making the http request, sending any info. back and setting data in local storage.

import axios from 'axios';

const API_URL = '/api/users/';

// Register user
const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // axios puts data inside an object called data
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authenticationService = {
  registerUser,
};

export default authenticationService;
