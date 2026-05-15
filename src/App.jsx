import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthRedirect } from './components/AuthRedirect';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CareerPage } from './pages/CareerPage';
import { ProgramPage } from './pages/ProgramPage';
import { ClientProgramsPage } from './pages/ClientProgramsPage';
import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="career" element={<CareerPage />} />
        <Route path="programs/client-programs" element={<ClientProgramsPage />} />
        <Route path="programs/:slug" element={<ProgramPage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="login/*" element={<AuthRedirect />} />
        <Route path="signup/*" element={<AuthRedirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
