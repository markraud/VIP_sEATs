import React from "react";
import Auth from "../../utils/auth";
import { Link, useHistory, useLocation} from "react-router-dom";


import Form from 'react-bootstrap/Form';
// import './style.css';


function Nav() {

  const history = useHistory()
  // const location = useLocation();
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <ul className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </ul>
          <ul className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </ul>
          <ul>
          <Form.Select aria-label="Default select example">
  <option>Select Section</option>
  <option value="1">Section One</option>
  <option value="2">Section Two</option>
  <option value="3">Section Three</option>
  <option value="4">Section Four</option>
</Form.Select>
</ul>
<ul>
          <Form.Select aria-label="Default select example">
  <option>Select Row</option>
  <option value="1">Row A</option>
  <option value="2">Row B</option>
  <option value="3">Row C</option>
  <option value="4">Row D</option>
</Form.Select>
</ul>
<ul>
          <Form.Select aria-label="Default select example">
  <option>Select Seat</option>
  <option value="1">Seat 1</option>
  <option value="2">Seat 2</option>
  <option value="3">Seat 3</option>
  <option value="4">Seat 4</option>
</Form.Select>
</ul>
          
        </ul>

      );
    } else {
      return (
        <ul className="flex-row">
          <ul className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </ul>
          <ul className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </ul>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/" onClick={() => {
              // history.go(0)
              history.replace("/")
              ///set the state.currentcategory to null
        }}>
          <span role="img" aria-label="baseball">⚾</span>
          VIP sEATs
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
