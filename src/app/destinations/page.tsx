'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Clock, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const allDestinations = [
  {
    id: 1,
    name: 'Santorini Paradise',
    location: 'Santorini, Greece',
    region: 'Europe',
    image: '/generated/hero-santorini.png',
    rating: 4.9,
    reviews: 234,
    price: '$2,599',
    duration: '6 days',
    maxGuests: 2,
    category: 'Romantic',
    description: 'Witness breathtaking sunsets from your private infinity pool overlooking the caldera.'
  },
  {
    id: 2,
    name: 'Maldives Luxury',
    location: 'Maldives',
    region: 'Asia',
    image: '/generated/hero-maldives.png',
    rating: 4.9,
    reviews: 186,
    price: '$4,299',
    duration: '8 days',
    maxGuests: 2,
    category: 'Beach',
    description: 'Overwater villas with direct lagoon access and world-class spa treatments.'
  },
  {
    id: 3,
    name: 'Swiss Alpine Retreat',
    location: 'Swiss Alps, Switzerland',
    region: 'Europe',
    image: '/generated/hero-swiss-alps.png',
    rating: 4.8,
    reviews: 298,
    price: '$3,899',
    duration: '7 days',
    maxGuests: 4,
    category: 'Adventure',
    description: 'Luxury chalets with panoramic mountain views and exclusive ski access.'
  },
  {
    id: 4,
    name: 'Bali Cultural Journey',
    location: 'Ubud, Bali',
    region: 'Asia',
    image: '/generated/hero-bali.png',
    rating: 4.7,
    reviews: 156,
    price: '$2,199',
    duration: '9 days',
    maxGuests: 6,
    category: 'Cultural',
    description: 'Immerse yourself in ancient temples, rice terraces, and traditional ceremonies.'
  },
  {
    id: 5,
    name: 'Iceland Northern Lights',
    location: 'Reykjavik, Iceland',
    region: 'Europe',
    image: '/generated/hero-iceland.png',
    rating: 4.8,
    reviews: 203,
    price: '$3,499',
    duration: '5 days',
    maxGuests: 8,
    category: 'Adventure',
    description: 'Chase the Aurora Borealis while enjoying luxury glacier lodges.'
  },
  {
    id: 6,
    name: 'Tokyo Modern Escape',
    location: 'Tokyo, Japan',
    region: 'Asia',
    image: '/generated/hero-santorini.png',
    rating: 4.6,
    reviews: 145,
    price: '$2,799',
    duration: '6 days',
    maxGuests: 4,
    category: 'Cultural',
    description: 'Experience traditional ryokans and cutting-edge luxury in Japan\'s capital.'
  }
];

const categories = ['All', 'Romantic', 'Beach', 'Adventure', 'Cultural'];
const regions = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredDestinations = allDestinations.filter((destination) => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || destination.category === selectedCategory;
    const matchesRegion = selectedRegion === 'All' || destination.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            DISCOVER YOUR NEXT
            <br />
            <span className="text-gradient">ADVENTURE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From pristine beaches to snow-capped mountains, explore our curated collection
            of luxury destinations around the world
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-muted-foreground">
            Showing {filteredDestinations.length} of {allDestinations.length} destinations
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border"
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

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full px-3 py-1">
                    <span className="text-sm font-semibold">
                      {destination.category}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">
                      {destination.rating}
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Up to {destination.maxGuests}</span>
                    </div>
                  </div>

                  {/* Price and Reviews */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">
                      {destination.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {destination.reviews} reviews
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href={`/destinations/${destination.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No destinations found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}