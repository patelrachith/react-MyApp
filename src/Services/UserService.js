import React from 'react';
import axios from 'axios';

const USER_API = 'https://jsonplaceholder.typicode.com/users';

class UserService {
  getUsers() {
    return axios.get(USER_API);
  }

  getUsersByID(userID) {
    return axios.get(USER_API + '/' + userID);
  }
}

export default new UserService();
