import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../../logo.png" alt="Logo" className="d-inline-block align-text-top" style={{ width: '35px', height: 'auto' }} />
        </a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item">
              <a className="nav-link " href="#">Visual Studio Code</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Update</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Extension</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">API</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Learn</a>
            </li>
          </ul>
              <form className="d-flex ms-auto">
                <input className="form-control me-2" type="search" placeholder="Search Docs" aria-label="Search" />
                <button className="btn btn-primary" type="submit">Download</button>
              </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
