import { Link } from 'react-router-dom';
import { company, programs, whyChooseUs } from '../data/siteContent';
import './Pages.css';

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title hero__title--brand">TALENT96</h1>
          <p className="hero__tagline">{company.tagline}</p>
          <p className="hero__lead">
            At {company.name}, we connect ambitious talent with organizations ready to grow,
            innovate, and lead — through permanent hiring, contract staffing, and contract-to-hire
            solutions.
          </p>
          <div className="hero__actions">
            <Link to="/about" className="btn btn--primary">
              About us
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">What We Do</h2>
          <div className="cards">
            {programs.map((item) => (
              <article key={item.slug} className="card">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">{item.description}</p>
                <Link to={`/programs/${item.slug}`} className="card__link">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Why Businesses Choose Us</h2>
          <ul className="list">
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
