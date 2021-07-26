import React, {useState} from "react";
import Auth from "../../utils/auth";
import { Link, useHistory, useLocation} from "react-router-dom";
import {ADD_SECTION, ADD_ROW, ADD_SEAT} from "../../utils/actions";


import Form from 'react-bootstrap/Form';
import { useStoreContext } from "../../utils/GlobalState";
// import './style.css';

// function renderSeats() {
//   var e = document.getElementById("");
// var value=e.options[e.selectedIndex].value;// get selected option value
// }

function Nav() {

  const [state, dispatch] = useStoreContext()

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
          <Form.Select onChange={(e) => dispatch({type: ADD_SECTION, section: e.target.value})} aria-label="Default select example">
  <option>Select Section</option>
  <option value="S1">Section One</option>
  <option value="S2">Section Two</option>
  <option value="S3">Section Three</option>
  <option value="S4">Section Four</option>
</Form.Select>
</ul>
<ul>
          <Form.Select onChange={(e) => dispatch({type: ADD_ROW, row: e.target.value})} aria-label="Default select example">
  <option>Select Row</option>
  <option value="RA">Row A</option>
  <option value="RB">Row B</option>
  <option value="RC">Row C</option>
  <option value="RD">Row D</option>
</Form.Select>
</ul>
<ul>
          <Form.Select onChange={(e) => dispatch({type: ADD_SEAT, seat: e.target.value})}aria-label="Default select example">
  <option>Select Seat</option>
  <option value="Seat1">Seat 1</option>
  <option value="Seat2">Seat 2</option>
  <option value="Seat3">Seat 3</option>
  <option value="Seat4">Seat 4</option>
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
          <div className='logo'>
          <span role="img" aria-label="baseball">⚾</span>
         
          VIP sEATs </div>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
