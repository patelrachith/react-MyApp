import React from 'react';
import { useHistory } from 'react-router-dom';

function HeaderComponent() {
  let history = useHistory();

  function redirect(path) {
    history.push(path);
  }

  return (
    <>
      <img src={logo} alt="My logo" />
      <h1>React App</h1>
      <button onClick={() => redirect('/')}>Home</button>
      <button onClick={() => redirect('/about')}>About</button>
      <hr />
    </>
  );
}

export default HeaderComponent;
