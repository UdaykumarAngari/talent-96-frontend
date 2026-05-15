import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './AuthPage.css';

const ROLES = {
  candidate: {
    label: 'Candidate',
    loginSubtitle: 'Sign in to explore jobs, apply, and manage your profile.',
    signupSubtitle: 'Create your account to apply for jobs and track applications.',
  },
  recruiter: {
    label: 'Recruiter',
    loginSubtitle: 'Sign in to post jobs, review applicants, and manage hiring.',
    signupSubtitle: 'Register your company to post jobs and manage applicants.',
  },
};

export function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialRole = searchParams.get('role') === 'recruiter' ? 'recruiter' : 'candidate';
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';

  const [role, setRole] = useState(initialRole);
  const [mode, setMode] = useState(initialMode);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setRole(searchParams.get('role') === 'recruiter' ? 'recruiter' : 'candidate');
    setMode(searchParams.get('mode') === 'signup' ? 'signup' : 'login');
  }, [searchParams]);

  const isSignup = mode === 'signup';
  const roleInfo = ROLES[role];

  function updateField(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('');

    if (isSignup && form.password !== form.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (isSignup && form.password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    const payload = {
      role,
      mode,
      ...(role === 'recruiter' && isSignup ? { companyName: form.companyName } : {}),
      ...(isSignup ? { fullName: form.fullName, phone: form.phone } : {}),
      email: form.email,
      password: form.password,
    };

    // Ready for API: POST /api/auth/login or /api/auth/register
    console.log('Auth submit:', payload);

    setMessage(
      isSignup
        ? `${roleInfo.label} account created successfully. (Demo — connect your API next.)`
        : `Signed in as ${roleInfo.label}. (Demo — connect your API next.)`
    );
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setMessage('');
    navigate(`/login?role=${role}&mode=${nextMode}`, { replace: true });
  }

  function switchRole(nextRole) {
    setRole(nextRole);
    setMessage('');
    navigate(`/login?role=${nextRole}&mode=${mode}`, { replace: true });
  }

  return (
    <section className="auth-page">
      <div className="auth-card card">
        <h1 className="auth-card__title">
          {isSignup ? 'Create account' : 'Welcome back'}
        </h1>
        <p className="auth-card__subtitle">
          {isSignup ? roleInfo.signupSubtitle : roleInfo.loginSubtitle}
        </p>

        <div className="auth-role-switch" role="group" aria-label="Account type">
          <button
            type="button"
            className={`auth-role-switch__btn${role === 'candidate' ? ' auth-role-switch__btn--active' : ''}`}
            onClick={() => switchRole('candidate')}
          >
            Candidate
          </button>
          <button
            type="button"
            className={`auth-role-switch__btn${role === 'recruiter' ? ' auth-role-switch__btn--active' : ''}`}
            onClick={() => switchRole('recruiter')}
          >
            Recruiter
          </button>
        </div>

        <div className="auth-mode-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={!isSignup}
            className={`auth-mode-tabs__tab${!isSignup ? ' auth-mode-tabs__tab--active' : ''}`}
            onClick={() => switchMode('login')}
          >
            Login
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isSignup}
            className={`auth-mode-tabs__tab${isSignup ? ' auth-mode-tabs__tab--active' : ''}`}
            onClick={() => switchMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {role === 'recruiter' && isSignup && (
            <label className="auth-form__label">
              Company name
              <input
                className="auth-form__input"
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={updateField}
                required
              />
            </label>
          )}

          {isSignup && (
            <label className="auth-form__label">
              {role === 'recruiter' ? 'Your name' : 'Full name'}
              <input
                className="auth-form__input"
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={updateField}
                required
              />
            </label>
          )}

          <label className="auth-form__label">
            Email
            <input
              className="auth-form__input"
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              required
            />
          </label>

          {isSignup && (
            <label className="auth-form__label">
              Phone
              <input
                className="auth-form__input"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateField}
                autoComplete="tel"
                required
              />
            </label>
          )}

          <label className="auth-form__label">
            Password
            <input
              className="auth-form__input"
              type="password"
              name="password"
              value={form.password}
              onChange={updateField}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              required
            />
          </label>

          {isSignup && (
            <label className="auth-form__label">
              Confirm password
              <input
                className="auth-form__input"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={updateField}
                autoComplete="new-password"
                required
              />
            </label>
          )}

          {message && (
            <p className={`auth-form__message${message.includes('success') || message.includes('Signed in') ? ' auth-form__message--success' : ' auth-form__message--error'}`}>
              {message}
            </p>
          )}

          <button type="submit" className="btn btn--primary auth-form__submit">
            {isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <p className="auth-card__hint">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <button type="button" className="auth-card__link-btn" onClick={() => switchMode('login')}>
                Sign in
              </button>
            </>
          ) : (
            <>
              Don&apos;t have an account?{' '}
              <button type="button" className="auth-card__link-btn" onClick={() => switchMode('signup')}>
                Sign up
              </button>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
