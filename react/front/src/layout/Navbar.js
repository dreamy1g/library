import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded ">
<div className="container-fluid m-3 col-4">
  <a className="navbar-brand" href="/">
   LIBRARY
  </a>
  <button 
  className="navbar-toggler"
   type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <Link className="btn btn-outline-light" to="/adduser"> Add User </Link>
    <Link className="btn btn-outline-light" to="/addbook"> Add Book </Link>
    <Link className="btn btn-outline-light" to="/borrows"> Add Borrow</Link>
  </div>
</nav>

    </div>
  )
}
