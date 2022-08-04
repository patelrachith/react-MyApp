import React from 'react';
import axios from 'axios';

const USER_API = 'https://jsonplaceholder.typicode.com/users';

class UserService {
  getUsers() {
    return axios.get(USER_API);
  }
}

export default new UserService();
