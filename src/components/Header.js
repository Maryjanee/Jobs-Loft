import React from 'react'

const Header = () => (
  <nav data-test="header">
    <div className="container d-flex align-center">
      <h1>Jobs Loft</h1>
      <li>
        <a href="#job-list">Jobs</a>
      </li>
    </div>
  </nav>

);

export default Header;
