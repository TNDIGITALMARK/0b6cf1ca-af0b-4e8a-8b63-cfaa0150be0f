'use client';

import { Globe, Shield, Headphones, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Expert Planning',
    description: 'Our travel specialists craft personalized itineraries based on your unique preferences and dreams.'
  },
  {
    icon: Shield,
    title: 'Exclusive Access',
    description: 'Enjoy VIP treatment with access to private tours, exclusive venues, and luxury accommodations.'
  },
  {
    icon: Headphones,
    title: 'Seamless Travel',
    description: '24/7 concierge support ensures your journey is smooth from departure to return home.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            WHY CHOOSE US?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of working with luxury travel experts who understand
            that your journey should be as extraordinary as your destination
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
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">5,000+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
          </div>

          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Countries Explored</div>
            </div>
          </div>

          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}