import { company, contact, coreValues, whyChooseUs } from '../data/siteContent';
import './Pages.css';

export function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">About Us</h1>
          <p className="page-header__lead">{company.name}</p>
          <p className="page-header__tagline">{company.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <p className="section__text">
            At {company.name}, we don&apos;t just fill vacancies — we connect ambitious talent
            with organizations that are ready to grow, innovate, and lead.
          </p>
          <p className="section__text">
            We are a modern recruitment and staffing partner committed to helping businesses find
            the right people at the right time. Whether companies need permanent professionals,
            project-based contract staff, or flexible Contract-to-Hire (C2H) solutions, we
            deliver hiring strategies designed for today&apos;s fast-moving business world.
          </p>
          <p className="section__text">
            In a competitive market where talent drives success, we focus on creating meaningful
            connections between employers and skilled professionals. Our approach combines industry
            insight, smart recruitment practices, and a people-first mindset to ensure every hiring
            decision creates long-term value.
          </p>

          <h2 className="section__title">Why Businesses Choose Us</h2>
          <p className="section__text">
            At Proquestify Talent96 Solutions, we believe recruitment should be fast,
            transparent, strategic, and human-centered. We stand out through:
          </p>
          <ul className="list">
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="section__text">
            We work as an extension of your team — understanding your hiring needs, business
            culture, and growth vision to deliver talent that truly fits.
          </p>

          <h2 className="section__title">Our Core Values</h2>
          <div className="cards">
            {coreValues.map((v) => (
              <article key={v.title} className="card">
                <h3 className="card__title">{v.title}</h3>
                <p className="card__text">{v.text}</p>
              </article>
            ))}
          </div>

          <h2 className="section__title">Our Vision</h2>
          <p className="section__text">
            To become a trusted recruitment partner known for delivering exceptional talent
            solutions that empower businesses and transform careers.
          </p>

          <h2 className="section__title">Our Mission</h2>
          <p className="section__text">
            To bridge the gap between talent and opportunity through innovative, reliable, and
            people-focused recruitment services.
          </p>

          <h2 className="section__title">Partner With Us</h2>
          <p className="section__text">
            At {company.name}, we are passionate about helping businesses grow with the right
            talent and helping professionals discover opportunities where they can thrive.
          </p>
          <p className="section__text section__text--emphasis">
            Because great companies are built by great people — and great careers begin with the
            right opportunity.
          </p>

          <h2 className="section__title">Contact</h2>
          <p className="section__text">
            <strong>Email:</strong>{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="section__text">
            <strong>Mobile:</strong>{' '}
            <a href={`tel:${contact.mobile.replace(/\s/g, '')}`}>{contact.mobile}</a>
          </p>
          <p className="section__text">
            <strong>Address:</strong> {contact.address}
          </p>
        </div>
      </section>
    </>
  );
}
