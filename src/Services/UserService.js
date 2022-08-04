import React from 'react';

const USER_API = 'http://localhost:8080/api/v1/employees';

class UserService {
  getUsers() {
    return axios.get(USER_API);
  }
}

export default new UserService();
