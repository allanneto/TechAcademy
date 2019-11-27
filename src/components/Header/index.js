import React from 'react';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="">
          Tech Academy
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <a className="nav-link" href="">
                Cadastre-se
              </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="btn btn-primary" role="button" href="">
                Login
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
