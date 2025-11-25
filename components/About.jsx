import { Award, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'We arrive on time, every time',
  },
  {
    icon: Users,
    title: 'Qualified Team',
    description: 'Trained and experienced professionals',
  },
  {
    icon: Award,
    title: 'Best Quality',
    description: 'Superior cleaning standards',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Eco-friendly products and methods',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                About COS
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              7 Years of Excellence in{' '}
              <span className="text-blue-600">South Florida</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For over 7 years, <strong>COS - Cleaning and Organization Solutions</strong> has been 
                proudly serving the South Florida community with exceptional cleaning and organization services.
              </p>
              
              <p>
                Our journey began with a simple mission: to create clean, welcoming spaces that make 
                a real difference in people's lives. What started as a small operation has grown into 
                a trusted name in the industry, thanks to our unwavering commitment to quality and 
                customer satisfaction.
              </p>
              
              <p>
                We believe that a clean environment is more than just aesthetics—it's about creating 
                spaces where families feel comfortable, businesses thrive, and peace of mind is guaranteed. 
                Every home and office we service is treated with the same care and attention to detail 
                as if it were our own.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional cleaning services that exceed expectations, building lasting 
                relationships with our clients through reliability, professionalism, and an unwavering 
                commitment to customer satisfaction.
              </p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
