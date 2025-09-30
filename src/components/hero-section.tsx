'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  {
    id: 1,
    src: '/generated/hero-santorini.png',
    destination: 'Santorini',
    country: 'Greece',
    description: 'Indulge in luxury',
    tagline: 'Curated journeys for the discerning traveler'
  },
  {
    id: 2,
    src: '/generated/hero-maldives.png',
    destination: 'Maldives',
    country: 'Indian Ocean',
    description: 'Paradise awaits',
    tagline: 'Overwater luxury in pristine waters'
  },
  {
    id: 3,
    src: '/generated/hero-swiss-alps.png',
    destination: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Alpine adventures',
    tagline: 'Majestic peaks and luxury chalets'
  },
  {
    id: 4,
    src: '/generated/hero-bali.png',
    destination: 'Bali',
    country: 'Indonesia',
    description: 'Tropical serenity',
    tagline: 'Sacred temples and emerald rice terraces'
  },
  {
    id: 5,
    src: '/generated/hero-iceland.png',
    destination: 'Iceland',
    country: 'Nordic Wilderness',
    description: 'Northern magic',
    tagline: 'Aurora borealis and glacial wonders'
  }
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
    setIsAutoplay(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoplay(false);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    setIsAutoplay(false);
  };

  const currentDestination = heroImages[currentImage];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={`${image.destination}, ${image.country}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              EXPLORE THE WORLD,
              <br />
              <span className="text-gradient">INDULGE IN LUXURY</span>
            </h1>

            {/* Destination Info */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl mb-2 opacity-90">
                {currentDestination.description}
              </p>
              <p className="text-lg opacity-80">
                {currentDestination.tagline}
              </p>
            </div>

            {/* Current Destination Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <span className="text-sm font-medium">
                NOW VIEWING: {currentDestination.destination.toUpperCase()}, {currentDestination.country.toUpperCase()}
              </span>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3"
              >
                Discover More
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-3"
              >
                Plan Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}