import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { ProjectsPage } from '@/app/pages/ProjectsPage';
import { ProcessPage } from '@/app/pages/ProcessPage';
import { TestimonialsPage } from '@/app/pages/TestimonialsPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
