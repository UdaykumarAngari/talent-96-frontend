import { Link } from 'react-router-dom';
import { company } from '../data/siteContent';
import './Pages.css';

export function CareerPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Career</h1>
          <p className="page-header__lead">
            Discover opportunities with {company.shortName}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <p className="section__text">
            We help professionals discover opportunities where they can thrive. Whether you are
            exploring permanent roles, contract assignments, or contract-to-hire pathways, our team
            is here to guide your next career move.
          </p>
          <p className="section__text">
            Sign in as a candidate to view openings, track applications, and manage your profile.
          </p>
          <div className="hero__actions" style={{ justifyContent: 'flex-start' }}>
            <Link to="/login?role=candidate" className="btn btn--primary">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
