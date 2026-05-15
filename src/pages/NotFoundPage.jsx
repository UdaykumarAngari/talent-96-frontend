import { Link } from 'react-router-dom';
import './Pages.css';

export function NotFoundPage() {
  return (
    <section className="page-header">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="page-header__title">Page not found</h1>
        <p className="page-header__lead">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
