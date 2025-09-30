'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredDestinations = [
  {
    id: 1,
    name: 'Maldives Paradise',
    location: 'Indian Ocean',
    image: '/generated/hero-maldives.png',
    rating: 4.9,
    reviews: 127,
    price: '$3,299',
    duration: '7 days',
    maxGuests: 2,
    description: 'Overwater villas with pristine coral reefs',
    highlights: ['Private Pool', 'All-Inclusive', 'Spa Treatments']
  },
  {
    id: 2,
    name: 'Parisian Escape',
    location: 'Paris, France',
    image: '/generated/hero-santorini.png',
    rating: 4.8,
    reviews: 89,
    price: '$2,199',
    duration: '5 days',
    maxGuests: 4,
    description: 'Luxury hotels near the Champs-Élysées',
    highlights: ['City Tours', 'Fine Dining', 'Museum Passes']
  },
  {
    id: 3,
    name: 'Egyptian Heritage',
    location: 'Cairo & Luxor, Egypt',
    image: '/generated/hero-bali.png',
    rating: 4.7,
    reviews: 156,
    price: '$1,899',
    duration: '8 days',
    maxGuests: 6,
    description: 'Ancient wonders with luxury Nile cruises',
    highlights: ['Pyramid Tours', 'Nile Cruise', 'Expert Guides']
  },
  {
    id: 4,
    name: 'Swiss Adventure',
    location: 'Swiss Alps',
    image: '/generated/hero-swiss-alps.png',
    rating: 4.9,
    reviews: 203,
    price: '$4,599',
    duration: '10 days',
    maxGuests: 8,
    description: 'Mountain luxury with scenic rail journeys',
    highlights: ['Luxury Chalets', 'Scenic Railways', 'Alpine Spas']
  }
];

export function FeaturedDestinations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">FEATURED DESTINATIONS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover sun-soaked adventures and vibrant cultures that create unforgettable memories
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border sunshine-glow"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="destination-overlay absolute inset-0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">
                    {destination.rating}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 left-4 sunny-gradient text-white rounded-full px-3 py-1 shadow-lg">
                  <span className="text-sm font-bold">
                    From {destination.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {destination.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Up to {destination.maxGuests}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          index % 3 === 0 ? 'bg-travel-coral/20 text-travel-coral border border-travel-coral/30' :
                          index % 3 === 1 ? 'bg-travel-turquoise/20 text-travel-turquoise border border-travel-turquoise/30' :
                          'bg-travel-mint/20 text-travel-mint border border-travel-mint/30'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="text-xs text-muted-foreground mb-4">
                  {destination.reviews} verified reviews
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full sunny-gradient hover:scale-105 text-white font-semibold transition-all duration-300 shadow-md"
                >
                  <Link href={`/destinations/${destination.id}`}>
                    Book This Adventure
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-travel-sunshine text-travel-sunshine hover:sunny-gradient hover:text-white font-semibold px-8 py-3 transition-all duration-300"
          >
            <Link href="/destinations">
              Explore All Adventures
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}