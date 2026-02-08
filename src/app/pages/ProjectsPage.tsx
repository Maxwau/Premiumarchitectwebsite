import { motion } from 'motion/react';
import { useState } from 'react';

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'villas', label: 'Villas' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Contemporary Villa',
      category: 'villas',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY4Mzg1NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Serene Retreat',
      category: 'residential',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5ldXRyYWx8ZW58MXx8fHwxNzY4Mzg3ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Elegant Dining Space',
      category: 'furniture',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1758977405163-f2595de08dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjgzODc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Modern Kitchen Design',
      category: 'residential',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MzIyOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Bespoke Storage Solutions',
      category: 'furniture',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2ODM3NzEzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Luxury Villa Estate',
      category: 'villas',
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODMwMzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649930536248-df58fd1f54f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFscyUyMHRleHR1cmV8ZW58MXx8fHwxNzY4Mzg3ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <p className="text-xs tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">Signature Projects</h1>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 text-sm tracking-wide transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <p className="text-xs tracking-widest text-neutral-500 uppercase mb-1">
                  {project.location}
                </p>
                <h3 className="text-xl tracking-tight">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
              Inspired by What You See?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Let's create something equally beautiful for your space.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
