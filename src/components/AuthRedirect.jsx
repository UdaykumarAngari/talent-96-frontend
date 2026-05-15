import { Navigate, useLocation } from 'react-router-dom';

/** Maps legacy /login/* and /signup/* URLs to unified auth page. */
export function AuthRedirect() {
  const { pathname } = useLocation();
  const isSignup = pathname.startsWith('/signup');
  const role = pathname.includes('recruiter') ? 'recruiter' : 'candidate';
  const mode = isSignup ? 'signup' : 'login';

  return <Navigate to={`/login?role=${role}&mode=${mode}`} replace />;
}
