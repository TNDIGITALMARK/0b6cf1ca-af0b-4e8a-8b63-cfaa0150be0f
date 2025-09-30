'use client';

import Link from 'next/link';
import { Plane, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-gradient">
                Wanderlust Adventures
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating extraordinary travel experiences that transform dreams into unforgettable journeys since 2014.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Travel Plaza, Luxury District, New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  hello@wanderlustadventures.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                href="/destinations"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/packages"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Travel Packages
              </Link>
              <Link
                href="/consultation"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Plan Your Trip
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Popular Destinations
            </h3>
            <div className="space-y-3">
              <Link
                href="/destinations/santorini"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Santorini, Greece
              </Link>
              <Link
                href="/destinations/maldives"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Maldives
              </Link>
              <Link
                href="/destinations/swiss-alps"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Swiss Alps
              </Link>
              <Link
                href="/destinations/bali"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Bali, Indonesia
              </Link>
              <Link
                href="/destinations/iceland"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Iceland
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive exclusive travel deals and inspiration.
            </p>

            <div className="space-y-3 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Wanderlust Adventures. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}