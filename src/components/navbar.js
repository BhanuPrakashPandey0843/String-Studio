import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navbarStyle = {
    backgroundColor: darkMode ? '#333' : '#f0f0f0',
    color: darkMode ? '#f0f0f0' : '#333',
  };

  const linkStyle = {
    color: darkMode ? '#f0f0f0' : '#333',
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ ...linkStyle, fontWeight: 'bold', fontFamily: 'Poppins', fontSize: '1.5rem' }}>
          {/* Your Brand Name */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: 'none',
            padding: '0.5rem 1rem',
            fontSize: '1.5rem',
            lineHeight: '1',
            backgroundColor: 'transparent',
            borderRadius: '0.25rem',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{ ...linkStyle, textDecoration: 'none', fontSize: '1.2rem' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ ...linkStyle, textDecoration: 'none', fontSize: '1.2rem' }}>
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ ...linkStyle, textDecoration: 'none', fontSize: '1.2rem' }}
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                border: '1px solid #ddd',
                borderRadius: '0.25rem',
              }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                border: '1px solid #ddd',
                borderRadius: '0.25rem',
                backgroundColor: '#fff',
                color: '#333',
              }}
            >
              Search
            </button>
          </form>
          <button
            className="btn btn-outline-secondary"
            onClick={toggleTheme}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '0.25rem',
              backgroundColor: '#fff',
              color: '#333',
            }}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
