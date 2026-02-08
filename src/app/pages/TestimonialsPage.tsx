import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Priya & Raj Mehta',
      project: '4BHK Villa, Mumbai',
      rating: 5,
      text: 'Monika transformed our villa into a sanctuary we absolutely love coming home to. Her attention to detail, understanding of our lifestyle, and ability to blend aesthetics with functionality is exceptional. Every corner of our home tells our story.',
      image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY4Mzg1NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Ananya Sharma',
      project: '3BHK Apartment, Pune',
      rating: 5,
      text: 'What I appreciated most was Monika\'s collaborative approach. She listened to my vision and elevated it beyond what I imagined. The custom modular furniture she designed perfectly fits my space and lifestyle. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5ldXRyYWx8ZW58MXx8fHwxNzY4Mzg3ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Vikram & Neha Gupta',
      project: 'Luxury Residence, Bangalore',
      rating: 5,
      text: 'Working with Monika was a delightful experience. She managed the entire project seamlessly, keeping us updated at every step. The result is a home that\'s not just beautiful but also incredibly comfortable and practical for our family.',
      image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MzIyOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Kavita Reddy',
      project: 'Penthouse, Delhi',
      rating: 5,
      text: 'Monika has an incredible eye for design and a warm, personal touch. She understood exactly what I wanted and created a sophisticated yet cozy space. The quality of execution was impeccable, and the project was delivered on time.',
      image: 'https://images.unsplash.com/photo-1758977405163-f2595de08dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjgzODc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Amit & Sonal Kapoor',
      project: 'Farmhouse, Goa',
      rating: 5,
      text: 'From the first consultation to the final reveal, Monika\'s professionalism and creativity shone through. She brought our dream of a tranquil farmhouse retreat to life with stunning attention to every detail. We couldn\'t be happier!',
      image: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODMwMzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Deepa Iyer',
      project: '2BHK Apartment, Chennai',
      rating: 5,
      text: 'As a first-time homeowner, I was nervous about the design process. Monika made it so easy and enjoyable! She patiently guided me through every decision and created a home that feels uniquely mine. Truly grateful for her expertise.',
      image: 'https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2ODM3NzEzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

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
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Testimonials</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              What Clients Say
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              The trust and satisfaction of my clients is what drives my passion for creating
              exceptional spaces. Here are some of their experiences working with me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.project}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Quote className="w-12 h-12 text-neutral-200" />
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neutral-900 text-neutral-900" />
                  ))}
                </div>
                <div>
                  <p className="tracking-tight text-lg">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Completed Projects' },
              { number: '30+', label: 'Happy Families' },
              { number: '5★', label: 'Average Rating' },
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
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
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
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join my satisfied clients and let's transform your home into something extraordinary.
            </p>
            <a
              href="mailto:hello@monikasurve.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
