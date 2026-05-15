import { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavDropdown.css';

export function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const menuId = useId();
  const location = useLocation();

  const isActive = items.some(
    (item) => item.to && location.pathname.startsWith(item.to)
  );

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`nav-dropdown${open ? ' nav-dropdown--open' : ''}${isActive ? ' nav-dropdown--active' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span className="nav-dropdown__caret" aria-hidden="true" />
      </button>
      <ul id={menuId} className="nav-dropdown__menu" role="menu">
        {items.map((item) => (
          <li key={item.to} role="none">
            <Link
              to={item.to}
              className="nav-dropdown__link"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
