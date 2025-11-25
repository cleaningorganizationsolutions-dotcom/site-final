import { Sparkles, Home, Package, Building2, Briefcase, Key } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Comprehensive cleaning that reaches every corner, eliminating dirt, grime, and bacteria for a truly fresh space.',
  },
  {
    icon: Home,
    title: 'Regular Cleaning',
    description: 'Consistent maintenance cleaning to keep your home or office spotless and organized on a weekly or bi-weekly schedule.',
  },
  {
    icon: Package,
    title: 'Move In/Out Cleaning',
    description: 'Thorough cleaning for moving transitions, ensuring your new or old space is pristine and ready.',
  },
  {
    icon: Building2,
    title: 'Post-Construction Cleaning',
    description: 'Specialized cleaning to remove construction dust, debris, and residue, making your space move-in ready.',
  },
  {
    icon: Briefcase,
    title: 'Office Cleaning',
    description: 'Professional commercial cleaning services to maintain a clean, healthy, and productive work environment.',
  },
  {
    icon: Key,
    title: 'Vacation Home Cleaning',
    description: 'Reliable cleaning services for vacation rentals and second homes, ensuring guest-ready conditions.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600">
            Experience the luxury of our premium cleaning services, tailored to elevate your space's unique elegance and comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom cleaning solution?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Contact us for a personalized quote
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
