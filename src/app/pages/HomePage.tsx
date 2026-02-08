import { ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function HomePage() {
  const featuredProjects = [
    {
      title: 'Modern Villa',
      category: 'Residential Interior',
      image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY4Mzg1NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Serene Bedroom',
      category: 'Luxury Residence',
      image: 'https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5ldXRyYWx8ZW58MXx8fHwxNzY4Mzg3ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Elegant Dining',
      category: 'Custom Furniture',
      image: 'https://images.unsplash.com/photo-1758977405163-f2595de08dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjgzODc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODMwMzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            Crafting Timeless
            <br />
            Luxury Interiors
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where comfort meets craftsmanship. Creating bespoke residential spaces that reflect your
            unique story and elevate everyday living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Introduction</p>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
              Designing Spaces That Tell Your Story
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              I'm Monika Surve, an architect and interior design consultant specializing in luxury
              residential interiors and bespoke modular furniture. With a deep commitment to comfort,
              craftsmanship, and personalized design, I transform houses into homes that resonate with
              warmth and elegance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-neutral-900 hover:gap-4 transition-all"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs tracking-widest text-neutral-500 uppercase mb-2">Portfolio</p>
              <h2 className="text-4xl md:text-5xl tracking-tight">Signature Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs tracking-widest text-neutral-500 uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl tracking-tight">{project.title}</h3>
              </motion.div>
            ))}
          </div>

          <Link
            to="/projects"
            className="md:hidden inline-flex items-center gap-2 mt-8 text-neutral-900 hover:gap-4 transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">What I Offer</p>
              <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
                End-to-End Design Solutions
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                From concept to completion, I provide comprehensive design services tailored to your
                lifestyle, preferences, and vision. Every detail is carefully considered to create
                spaces that are both beautiful and functional.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5" />
                  <div>
                    <h3 className="tracking-tight mb-1">Luxury Residential Interiors</h3>
                    <p className="text-sm text-neutral-600">
                      Complete home design solutions for villas and premium apartments
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5" />
                  <div>
                    <h3 className="tracking-tight mb-1">Bespoke Modular Furniture</h3>
                    <p className="text-sm text-neutral-600">
                      Custom-designed furniture crafted to perfection
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5" />
                  <div>
                    <h3 className="tracking-tight mb-1">Space Planning & Styling</h3>
                    <p className="text-sm text-neutral-600">
                      Optimized layouts and curated finishing touches
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MzIyOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Let's collaborate to create a home that reflects your unique style and enhances your
              everyday living experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
