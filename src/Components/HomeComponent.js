import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserService from '../Services/UserService';

function HomeComponent() {
  let history = useHistory();
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

  const onViewUser = () => {
    console.log('view User');
    redirect('/viewuser');
  };

  function redirect(path) {
    history.push(path);
  }

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
      <div class="footer">
        <button onClick={() => onViewUser()} type="submit" class="btn">
          View User
        </button>
      </div>
    </>
  );
}

export default HomeComponent;
