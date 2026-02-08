import { motion } from 'motion/react';
import { Award, Users, Clock, Heart } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Comfort First',
      description: 'Every design prioritizes your comfort and well-being',
    },
    {
      icon: Award,
      title: 'Craftsmanship',
      description: 'Meticulous attention to detail in every element',
    },
    {
      icon: Users,
      title: 'Personalized',
      description: 'Tailored solutions that reflect your unique story',
    },
    {
      icon: Clock,
      title: 'Timeless',
      description: 'Designs that remain elegant through the years',
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1667400104797-132f6be037ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzMTQ0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
          <p className="text-xs tracking-widest uppercase mb-4">About</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">Meet Monika Surve</h1>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-neutral-700 leading-relaxed"
          >
            <p>
              With a passion for transforming spaces into sanctuaries, I've dedicated my career to
              creating luxury residential interiors that go beyond aesthetics to touch the heart of
              home.
            </p>
            <p>
              My journey in architecture and interior design began with a simple belief: that every
              home should be a reflection of the people who live in it. This philosophy guides every
              project I undertake, from intimate apartments to sprawling villas.
            </p>
            <p>
              I specialize in bespoke modular furniture and comprehensive interior design solutions,
              working closely with homeowners, HNIs, and discerning clients who appreciate the value
              of personalized craftsmanship and timeless elegance.
            </p>
            <p>
              What sets my approach apart is the deep commitment to understanding your lifestyle,
              preferences, and aspirations. I don't just design spaces—I create environments where
              memories are made, comfort is paramount, and beauty is woven into every detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Core Values</p>
            <h2 className="text-4xl md:text-5xl tracking-tight">What I Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                  <value.icon className="w-8 h-8 text-neutral-900" />
                </div>
                <h3 className="text-xl tracking-tight mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Expertise</p>
              <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
                Comprehensive Design Solutions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl tracking-tight mb-2">Luxury Residential Design</h3>
                  <p className="text-neutral-600">
                    Creating cohesive, elegant interiors for villas and premium apartments with a focus
                    on comfort and sophistication.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl tracking-tight mb-2">Bespoke Modular Furniture</h3>
                  <p className="text-neutral-600">
                    Custom-designed furniture pieces that maximize functionality while adding unique
                    character to your space.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl tracking-tight mb-2">End-to-End Execution</h3>
                  <p className="text-neutral-600">
                    From initial concept to final installation, I manage every aspect to ensure
                    seamless delivery and exceptional results.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1649930536248-df58fd1f54f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFscyUyMHRleHR1cmV8ZW58MXx8fHwxNzY4Mzg3ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design materials"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '10+', label: 'Years Experience' },
              { number: '30+', label: 'Happy Families' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl tracking-tight mb-2">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
