import React, { useEffect, useState } from 'react';
import UserService from '../Services/UserService';

function HomeComponent() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('call userEffect');
    UserService.getUsers().then((res) => {
      console.log(res.data);
      setUsers(res.data);
      //setUsers({ users: res.data });
      setCount(3);
      console.log(users.length);
    });
  }, []);

  function userChange(e) {
    console.log('selected user:' + e);
  }

  const handleChange = (e) => {
    //debugger;
    console.log(
      'selected user:' + e.target.options[e.target.selectedIndex].text
    );
    //setValue(e.target.value);
  };

  return (
    <>
      <h3> I am home component </h3>
      <div>Array length: {count}</div>
      <div>Array length: {users.length}</div>

      <label>Select a User:</label>
      <select onChange={handleChange}>
        {users.map((user, index) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </>
  );
}

export default HomeComponent;
