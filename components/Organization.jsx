import { CheckCircle, Layers, FolderOpen, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: 'Declutter & Simplify',
    description: 'Remove the chaos and create functional, streamlined spaces.',
  },
  {
    icon: FolderOpen,
    title: 'Custom Systems',
    description: 'Personalized organization solutions tailored to your lifestyle.',
  },
  {
    icon: Sparkles,
    title: 'Lasting Results',
    description: 'Systems designed to maintain order long after we leave.',
  },
];

export function Organization() {
  return (
    <section id="organization" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              Organization Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Space with{' '}
            <span className="text-emerald-600">Professional Organization</span>
          </h2>
          <p className="text-lg text-gray-600">
            Beyond cleaning, we help you create organized, functional spaces that bring peace of mind and efficiency to your daily life.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                More Than Just Cleaning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our organization services go beyond tidying up. We analyze your space, understand your habits, and create customized systems that work for you. Whether it&apos;s a cluttered closet, chaotic kitchen, or overwhelming home office, we transform spaces into functional, beautiful areas.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Checklist */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-600 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">What We Organize:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Closets & Wardrobes',
                  'Kitchen & Pantry',
                  'Home Offices',
                  'Garages & Storage',
                  'Kids Rooms',
                  'Living Spaces',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Ready to transform your space?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Get a free organization consultation
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
