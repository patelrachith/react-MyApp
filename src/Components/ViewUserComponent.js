import React, { useEffect, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserService from '../Services/UserService';

const ViewUserComponent = () => {
  const location = useLocation();
  const [selectUserID, setSelectUserID] = useState(0);
  const [selectUser, setSelectUser] = useState(0);

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    console.log(location.state.selectUserID); // result: 'some_value'
    setSelectUser(location.state.selectUserID);
    UserService.getUsersByID(location.state.selectUserID).then((res) => {
      console.log(res.data);
      setSelectUser(res.data);
      //setUsers({ users: res.data });
    });
  }, [location]);

  return (
    <>
      <h1>User details</h1>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">Name:</div>
          <div class="col-sm-4">{selectUser.name}</div>
        </div>
        <div class="row">
          <div class="col-sm-4">Username:</div>
          <div class="col-sm-4">{selectUser.username}</div>
        </div>
        <div class="row">
          <div class="col-sm-4">Email:</div>
          <div class="col-sm-4">{selectUser.email}</div>
        </div>
        <div class="row">
          <div class="col-sm-4">Phone:</div>
          <div class="col-sm-4">{selectUser.phone}</div>
        </div>
      </div>
    </>
  );
};

export default ViewUserComponent;
