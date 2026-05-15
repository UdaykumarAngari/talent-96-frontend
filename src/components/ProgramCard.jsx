import './ProgramCard.css';

const icons = {
  mobile: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect x="24" y="8" width="32" height="56" rx="6" fill="#fff" opacity="0.9" />
      <circle cx="40" cy="58" r="3" fill="currentColor" opacity="0.5" />
      <rect x="30" y="16" width="20" height="32" rx="2" fill="currentColor" opacity="0.2" />
    </svg>
  ),
  frontend: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect x="12" y="20" width="56" height="40" rx="4" fill="#fff" opacity="0.85" />
      <rect x="18" y="28" width="20" height="4" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="18" y="36" width="32" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="18" y="44" width="24" height="4" rx="1" fill="currentColor" opacity="0.25" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect x="16" y="24" width="48" height="32" rx="4" fill="#fff" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M28 36h24M28 44h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M40 24v8M40 48v8M24 40h8M48 40h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect x="20" y="44" width="10" height="20" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="35" y="32" width="10" height="32" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="50" y="24" width="10" height="40" rx="2" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <path
        d="M24 48c0-8 6-14 14-14 2 0 4 .5 6 1.5C46 28 54 24 62 28c6 3 10 9 10 16 0 2-.5 4-1 6H22c-4 0-6-3-6-6z"
        fill="#fff"
        opacity="0.85"
      />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect x="18" y="22" width="44" height="36" rx="4" fill="#fff" opacity="0.9" />
      <text x="40" y="46" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor" opacity="0.6">
        UI/UX
      </text>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <path
        d="M40 18l20 10v14c0 12-8 22-20 26-12-4-20-14-20-26V28l20-10z"
        fill="#fff"
        opacity="0.85"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  tech: (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M40 28v24M28 40h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
};

const iconMap = {
  'mobile-applications': 'mobile',
  'frontend-developer': 'frontend',
  'backend-developer': 'backend',
  devops: 'devops',
  'analytics-data-science': 'data',
  'emerging-technologies': 'tech',
  'cloud-computing': 'cloud',
  'ui-ux-designer': 'design',
  'cyber-security': 'security',
};

export function ProgramCard({ title, description, theme, slug }) {
  const iconKey = iconMap[slug] || 'tech';

  return (
    <article className="program-card">
      <div className={`program-card__visual program-card__visual--${theme}`}>
        {icons[iconKey]}
      </div>
      <h3 className="program-card__title">{title}</h3>
      <p className="program-card__text">{description}</p>
    </article>
  );
}
