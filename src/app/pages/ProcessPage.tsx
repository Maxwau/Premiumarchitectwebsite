import { motion } from 'motion/react';
import { MessageCircle, Pencil, Palette, Wrench, CheckCircle } from 'lucide-react';

export function ProcessPage() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'We begin with an in-depth conversation to understand your lifestyle, preferences, budget, and vision for your space.',
      details: [
        'Site visit and measurement',
        'Lifestyle and needs assessment',
        'Budget discussion',
        'Timeline planning',
      ],
    },
    {
      number: '02',
      icon: Pencil,
      title: 'Concept Development',
      description: 'I create preliminary design concepts that capture your vision, presenting mood boards, sketches, and layout options.',
      details: [
        'Mood board creation',
        'Space planning',
        'Initial sketches',
        'Concept presentation',
      ],
    },
    {
      number: '03',
      icon: Palette,
      title: 'Design Refinement',
      description: 'We collaborate to refine the design, selecting materials, finishes, furniture, and all the details that bring your space to life.',
      details: [
        'Material selection',
        'Color palette finalization',
        'Furniture specifications',
        '3D visualization',
      ],
    },
    {
      number: '04',
      icon: Wrench,
      title: 'Execution & Oversight',
      description: 'With detailed plans in hand, I coordinate with trusted vendors and craftsmen, overseeing every aspect of the execution.',
      details: [
        'Vendor coordination',
        'Quality control',
        'Progress monitoring',
        'Problem-solving',
      ],
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Final Reveal',
      description: 'The project culminates in the final installation and styling, where your dream space comes to life exactly as envisioned.',
      details: [
        'Final installation',
        'Styling and accessorizing',
        'Walkthrough and handover',
        'After-care support',
      ],
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
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Process</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              How We Work Together
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              A transparent, collaborative journey from concept to completion, designed to bring your
              vision to life with minimal stress and maximum delight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Number & Icon */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-6">
                <div className="text-7xl md:text-8xl tracking-tighter text-neutral-100">{step.number}</div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-9 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl tracking-tight mb-4">{step.title}</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="bg-neutral-50 p-6 space-y-3">
                  <p className="text-sm tracking-widest text-neutral-500 uppercase">Key Activities</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">Timeline</p>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">Typical Project Duration</h2>
            <p className="text-lg text-neutral-600">
              While every project is unique, here's a general timeline for reference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { duration: '1-2 weeks', phase: 'Consultation & Concept' },
              { duration: '2-4 weeks', phase: 'Design & Planning' },
              { duration: '8-12 weeks', phase: 'Execution & Delivery' },
            ].map((timeline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white"
              >
                <div className="text-4xl tracking-tight mb-2">{timeline.duration}</div>
                <div className="text-sm text-neutral-600">{timeline.phase}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-neutral-500 text-center mt-8">
            * Timeline may vary based on project scope and complexity
          </p>
        </div>
      </section>

      {/* Why This Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">Why This Approach Works</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Personalized Attention',
                description: 'Every step is tailored to your unique needs and preferences, ensuring the final result truly reflects who you are.',
              },
              {
                title: 'Transparent Communication',
                description: 'Regular updates and open dialogue keep you informed and involved throughout the entire journey.',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous oversight at every stage ensures the highest standards of craftsmanship and execution.',
              },
              {
                title: 'Stress-Free Experience',
                description: 'I handle all the details and coordination, so you can focus on the excitement of transformation.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl tracking-tight mb-2">{benefit.title}</h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
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
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">Ready to Begin?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's start the conversation about your dream space today.
            </p>
            <a
              href="mailto:hello@monikasurve.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
