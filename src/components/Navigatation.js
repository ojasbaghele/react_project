import React from 'react';
import {Link} from "react-router-dom";

export default function Navigatation() {
  return (
    <div class="nav-btns">
        {/* <button type="button" class="btn btn-info"> Home </button>
        <button type="button" class="btn btn-info"> About </button>
        <button type="button" class="btn btn-info"> Contact </button>
        <button type="button" class="btn btn-info"> Logout </button> */}
        <Link to="/">Shop</Link>
        <Link to="/about">About</Link>

        <li>Logout</li>
    </div>
  )
}