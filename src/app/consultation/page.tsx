'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Star, Globe, Award, Calendar, Users, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const travelConsultants = [
  {
    id: 1,
    name: 'Sophia Chen',
    title: 'Senior Luxury Travel Specialist',
    image: '/generated/hero-santorini.png',
    rating: 4.9,
    reviews: 284,
    experience: '12 years',
    specialties: ['Europe', 'Romantic Getaways', 'Luxury Cruises'],
    languages: ['English', 'Mandarin', 'French'],
    bio: 'Sophia has curated extraordinary journeys across Europe and Asia for over a decade, specializing in romantic escapes and luxury cruise experiences.',
    countries: 45
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    title: 'Adventure & Safari Expert',
    image: '/generated/hero-swiss-alps.png',
    rating: 4.8,
    reviews: 195,
    experience: '9 years',
    specialties: ['Africa', 'Adventure Travel', 'Wildlife Safaris'],
    languages: ['English', 'Swahili', 'German'],
    bio: 'Marcus brings the thrill of African safaris and mountain adventures to life with his extensive knowledge of wildlife and extreme destinations.',
    countries: 38
  },
  {
    id: 3,
    name: 'Isabella Rodriguez',
    title: 'Cultural & Culinary Specialist',
    image: '/generated/hero-bali.png',
    rating: 4.9,
    reviews: 267,
    experience: '15 years',
    specialties: ['Asia Pacific', 'Cultural Tours', 'Culinary Journeys'],
    languages: ['English', 'Spanish', 'Japanese'],
    bio: 'Isabella creates immersive cultural experiences that connect travelers with local traditions, cuisine, and hidden gems across Asia Pacific.',
    countries: 52
  }
];

const budgetRanges = [
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $20,000',
  '$20,000 - $50,000',
  '$50,000+'
];

export default function ConsultationPage() {
  const [selectedConsultant, setSelectedConsultant] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    duration: '',
    travelers: '',
    budget: '',
    interests: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, consultantId: selectedConsultant });
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            PLAN YOUR PERFECT
            <br />
            <span className="text-gradient">JOURNEY</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Work with our expert travel consultants to create a personalized luxury experience
            tailored to your dreams and preferences
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Consultants Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Meet Our Travel Experts
            </h2>

            <div className="space-y-6">
              {travelConsultants.map((consultant) => (
                <Card
                  key={consultant.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedConsultant === consultant.id
                      ? 'ring-2 ring-primary bg-primary/5'
                      : 'hover:bg-card/50'
                  }`}
                  onClick={() => setSelectedConsultant(consultant.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Profile Image */}
                      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={consultant.image}
                          alt={consultant.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Consultant Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-card-foreground">
                            {consultant.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-semibold">
                              {consultant.rating}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({consultant.reviews})
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-primary font-medium mb-2">
                          {consultant.title}
                        </p>

                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {consultant.bio}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Award className="h-4 w-4" />
                            <span>{consultant.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Globe className="h-4 w-4" />
                            <span>{consultant.countries} countries</span>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {consultant.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Languages */}
                        <div className="text-xs text-muted-foreground">
                          Languages: {consultant.languages.join(', ')}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Consultation Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {selectedConsultant
                    ? `Book with ${travelConsultants.find(c => c.id === selectedConsultant)?.name}`
                    : 'Select a Consultant to Begin'
                  }
                </CardTitle>
                {selectedConsultant && (
                  <p className="text-muted-foreground">
                    Tell us about your dream journey and we'll craft the perfect itinerary for you.
                  </p>
                )}
              </CardHeader>

              <CardContent>
                {selectedConsultant ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    {/* Travel Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="destination">Preferred Destination</Label>
                        <Input
                          id="destination"
                          type="text"
                          placeholder="e.g., Santorini, Maldives"
                          value={formData.destination}
                          onChange={(e) => handleInputChange('destination', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                        <Input
                          id="travelDates"
                          type="text"
                          placeholder="e.g., June 2024"
                          value={formData.travelDates}
                          onChange={(e) => handleInputChange('travelDates', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Trip Duration</Label>
                        <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-5 days">3-5 days</SelectItem>
                            <SelectItem value="1 week">1 week</SelectItem>
                            <SelectItem value="2 weeks">2 weeks</SelectItem>
                            <SelectItem value="3 weeks">3 weeks</SelectItem>
                            <SelectItem value="1 month">1 month or more</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="travelers">Number of Travelers</Label>
                        <Select value={formData.travelers} onValueChange={(value) => handleInputChange('travelers', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Solo (1)</SelectItem>
                            <SelectItem value="2">Couple (2)</SelectItem>
                            <SelectItem value="3-4">Small Group (3-4)</SelectItem>
                            <SelectItem value="5-8">Group (5-8)</SelectItem>
                            <SelectItem value="9+">Large Group (9+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="interests">Travel Interests</Label>
                      <Input
                        id="interests"
                        type="text"
                        placeholder="e.g., culture, adventure, relaxation, food"
                        value={formData.interests}
                        onChange={(e) => handleInputChange('interests', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        rows={4}
                        placeholder="Tell us about any special requirements, celebrations, or specific experiences you're looking for..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                    >
                      Book Free Consultation
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Your consultation is completely free with no obligation. We'll contact you within 24 hours.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">👆</div>
                    <p className="text-muted-foreground">
                      Choose your preferred travel expert from the consultants above to get started.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}