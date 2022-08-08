import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../Images/React_Logo.png';

function HeaderComponent() {
  let history = useHistory();

  function redirect(path) {
    history.push(path);
  }

  return (
    <>
      {/* <img src={Logo} /> */}
      <h1>React App</h1>
      <div class="btn-group btn-group-sm">
        <button class="btn btn-outline-primary" onClick={() => redirect('/')}>
          Home
        </button>
        <button
          class="btn btn-outline-primary"
          onClick={() => redirect('/about')}
        >
          About
        </button>
      </div>
      <hr />
    </>
  );
}

export default HeaderComponent;
