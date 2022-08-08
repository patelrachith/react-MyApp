import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserService from '../Services/UserService';

function HomeComponent() {
  let history = useHistory();
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [selectUserID, setSelectUserID] = useState(0);

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
    setSelectUserID(e.target.value);
    console.log(
      'selected user Name:' + e.target.options[e.target.selectedIndex].text
    );
    console.log('selected user ID:' + e.target.value);
    //setValue(e.target.value);
  };

  const onViewUser = () => {
    console.log('view User');
    redirect('/viewuser');
  };

  function redirect(path) {
    console.log('Select User:' + selectUserID);
    //history.push(path);

    history.push({
      pathname: path,
      search: '?userID=abc',
      state: { selectUserID: selectUserID },
    });
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-2">Number of users: {users.length}</div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-2">Select User:</div>
          <div class="col-sm-4">
            <select onChange={handleChange}>
              {users.map((user, index) => (
                <option value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <button
              onClick={() => onViewUser()}
              type="submit"
              class="btn btn-primary"
            >
              View user details
            </button>
          </div>
        </div>
      </div>

      <label></label>

      <div class="footer"></div>
    </>
  );
}

export default HomeComponent;
