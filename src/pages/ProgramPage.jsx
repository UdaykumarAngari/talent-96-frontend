import { Link, useParams } from 'react-router-dom';
import { programs } from '../data/siteContent';
import './Pages.css';

export function ProgramPage() {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Program not found</h1>
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{program.title}</h1>
          <p className="page-header__lead">Our Programs</p>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <p className="section__text">{program.description}</p>
          <Link to="/contact" className="btn btn--primary">
            Contact us to learn more
          </Link>
        </div>
      </section>
    </>
  );
}
