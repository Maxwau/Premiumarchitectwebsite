import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg tracking-tight">Monika Surve</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Creating timeless, luxury residential interiors with meticulous attention to detail and
              personalized craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-widest text-neutral-900 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-widest text-neutral-900 uppercase">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-neutral-600">Interior Design</li>
              <li className="text-sm text-neutral-600">Modular Furniture</li>
              <li className="text-sm text-neutral-600">Space Planning</li>
              <li className="text-sm text-neutral-600">Project Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-widest text-neutral-900 uppercase">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-neutral-600 mt-0.5" />
                <a href="mailto:moonikasurve@gmail.com" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  moonikasurve@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-neutral-600 mt-0.5" />
                <a href="tel:+919130710713" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  +91 9130710713
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral-600 mt-0.5" />
                <span className="text-sm text-neutral-600">Koregaon Park, Lane C1, Pune</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/moonika_surve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919130710713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © {currentYear} Monika Surve. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
              Crafted with care for exceptional spaces
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
