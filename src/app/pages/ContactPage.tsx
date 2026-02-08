import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is a frontend-only demo)
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities,
              I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl tracking-tight mb-8">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wide mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-wide mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm tracking-wide mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm tracking-wide mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="complete-home">Complete Home Interior</option>
                    <option value="modular-furniture">Modular Furniture</option>
                    <option value="villa">Villa Design</option>
                    <option value="apartment">Apartment Design</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wide mb-2">
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl tracking-tight mb-8">Get in Touch</h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  I'm always excited to discuss new projects and explore how I can help bring your
                  vision to life. Feel free to reach out through any of these channels.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 rounded-full flex-shrink-0">
                      <Mail className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-neutral-500 mb-1">Email</p>
                      <a
                        href="mailto:moonikasurve@gmail.com"
                        className="text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
                      >
                        moonikasurve@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 rounded-full flex-shrink-0">
                      <Phone className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-neutral-500 mb-1">Phone</p>
                      <a
                        href="tel:+919130710713"
                        className="text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
                      >
                        +91 9130710713
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 rounded-full flex-shrink-0">
                      <MapPin className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-neutral-500 mb-1">Location</p>
                      <p className="text-lg text-neutral-900">Koregaon Park, Lane C1, Pune</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 rounded-full flex-shrink-0">
                      <Instagram className="w-5 h-5 text-neutral-900" />
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-neutral-500 mb-1">Instagram</p>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
                      >
                        @monikasurve_interiors
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-8 space-y-4">
                <h3 className="text-xl tracking-tight">Quick Connect</h3>
                <p className="text-neutral-600 text-sm">
                  For immediate queries, you can also reach me on WhatsApp
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl tracking-tight mb-6">Office Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-md mx-auto">
              <div>
                <p className="text-sm text-neutral-500">Monday - Friday</p>
                <p className="text-lg">10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Saturday</p>
                <p className="text-lg">10:00 AM - 2:00 PM</p>
              </div>
            </div>
            <p className="text-sm text-neutral-500 mt-6">Appointments preferred</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
