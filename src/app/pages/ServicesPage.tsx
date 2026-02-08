import { motion } from 'motion/react';
import { Home, Sofa, Ruler, Palette, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Complete Home Interiors',
      description: 'Comprehensive interior design for your entire home, creating cohesive and elegant spaces.',
      features: ['Space planning', 'Concept development', 'Material selection', 'Project management'],
    },
    {
      icon: Sofa,
      title: 'Bespoke Modular Furniture',
      description: 'Custom-designed furniture solutions tailored to your space and lifestyle needs.',
      features: ['Custom wardrobes', 'Kitchen modules', 'Storage solutions', 'Entertainment units'],
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your space with intelligent layouts that enhance functionality and flow.',
      features: ['Layout design', 'Furniture arrangement', 'Traffic flow optimization', '3D visualization'],
    },
    {
      icon: Palette,
      title: 'Interior Styling',
      description: 'Curated finishing touches that bring personality and warmth to your interiors.',
      features: ['Color consultation', 'Textile selection', 'Accessory curation', 'Art placement'],
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance and highlight key features.',
      features: ['Natural lighting', 'Ambient lighting', 'Task lighting', 'Decorative fixtures'],
    },
    {
      icon: CheckCircle,
      title: 'Project Execution',
      description: 'End-to-end project management ensuring quality and timely delivery.',
      features: ['Vendor coordination', 'Quality control', 'Timeline management', 'Final installation'],
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2ODM3NzEzNXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        >
          <p className="text-xs tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            Comprehensive Design Solutions
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            From concept to completion, I offer end-to-end design services tailored to create spaces that
            inspire and delight.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-neutral-50 hover:bg-neutral-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white mb-6">
                  <service.icon className="w-7 h-7 text-neutral-900" />
                </div>
                <h3 className="text-2xl tracking-tight mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                      <div className="w-1 h-1 rounded-full bg-neutral-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">My Design Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A collaborative, transparent approach that brings your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and vision' },
              { step: '02', title: 'Design', desc: 'Creating tailored concepts and plans' },
              { step: '03', title: 'Development', desc: 'Refining details and selections' },
              { step: '04', title: 'Delivery', desc: 'Executing with precision and care' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl tracking-tighter text-neutral-200 mb-4">{phase.step}</div>
                <h3 className="text-xl tracking-tight mb-2">{phase.title}</h3>
                <p className="text-sm text-neutral-600">{phase.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all"
            >
              Learn More About My Process
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Ready to transform your space? Get in touch to discuss your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
