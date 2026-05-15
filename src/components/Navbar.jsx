import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" end onClick={() => setMenuOpen(false)}>
          TALENT96
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}
          aria-label="Main"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/programs/client-programs"
            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Our Programs
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Career
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
