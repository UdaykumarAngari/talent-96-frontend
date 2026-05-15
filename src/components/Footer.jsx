import { Link } from 'react-router-dom';
import { contact, company } from '../data/siteContent';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <h3 className="footer__title">About Talent96</h3>
          <p className="footer__text">{company.tagline}</p>
        </div>
        <div>
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Our Programs</h3>
          <ul className="footer__links">
            <li>
              <Link to="/programs/client-programs">Client Programs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Contact Us</h3>
          <p className="footer__text">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="footer__text">
            <a href={`tel:${contact.mobile.replace(/\s/g, '')}`}>{contact.mobile}</a>
          </p>
          <p className="footer__text">{contact.address}</p>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </footer>
  );
}
