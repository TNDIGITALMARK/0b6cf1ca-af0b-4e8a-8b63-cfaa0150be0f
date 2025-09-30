'use client';

import { Globe, Shield, Headphones, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Adventure Planning',
    description: 'Our sunny travel specialists create personalized adventures filled with joy, discovery, and unforgettable moments.'
  },
  {
    icon: Shield,
    title: 'Premium Experiences',
    description: 'Access exclusive tropical destinations, vibrant cultural tours, and sun-soaked luxury accommodations.'
  },
  {
    icon: Headphones,
    title: 'Happy Travels',
    description: 'Round-the-clock support ensures your sunny adventure stays bright from start to finish.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 ocean-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">WHY CHOOSE SUNNY TRAVELS?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of happy travelers who've discovered that life's brightest moments
            happen when you explore the world with sunshine in your heart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all sunshine-glow backdrop-blur-sm border border-white/30">
                <feature.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 sunshine-glow hover:bg-white/25 transition-all">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-travel-sunshine" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">8,500+</div>
              <div className="text-white/80">Happy Adventurers</div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 sunshine-glow hover:bg-white/25 transition-all">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-12 w-12 text-travel-coral" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">75+</div>
              <div className="text-white/80">Tropical Destinations</div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 sunshine-glow hover:bg-white/25 transition-all">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-12 w-12 text-travel-turquoise" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Years Creating Joy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}