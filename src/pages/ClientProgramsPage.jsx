import { clientPrograms } from '../data/clientPrograms';
import { ProgramCard } from '../components/ProgramCard';
import './Pages.css';
import './ClientPrograms.css';

export function ClientProgramsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Client Programs</h1>
          <p className="page-header__lead">
            Professional training programs to build in-demand skills for today&apos;s workforce.
          </p>
        </div>
      </section>

      <section className="section client-programs">
        <div className="container">
          <div className="client-programs__grid">
            {clientPrograms.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
