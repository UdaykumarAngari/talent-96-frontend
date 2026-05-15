import { contact, company } from '../data/siteContent';
import './Pages.css';

export function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__lead">Get in touch with {company.shortName}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <article className="card contact-card">
              <h2 className="card__title">Email</h2>
              <p className="card__text">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </article>
            <article className="card contact-card">
              <h2 className="card__title">Mobile</h2>
              <p className="card__text">
                <a href={`tel:${contact.mobile.replace(/\s/g, '')}`}>{contact.mobile}</a>
              </p>
            </article>
            <article className="card contact-card contact-card--wide">
              <h2 className="card__title">Address</h2>
              <p className="card__text">{contact.address}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
