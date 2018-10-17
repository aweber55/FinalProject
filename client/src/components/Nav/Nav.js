import React from "react";
// import { Link } from "react-router-dom";



const Nav = (props) => (


<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" href="/Main">Search</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Saved">Saved</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Home">Logout</a>
  </li>
  {/* <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li> */}
</ul>


);
export default Nav;
