'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Plane className="h-6 w-6 text-primary" />
          </div>
          <span className="text-2xl font-bold text-gradient">
            Wanderlust Adventures
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Destinations
          </Link>
          <Link
            href="/packages"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Packages
          </Link>
          <Link
            href="/consultation"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Plan Trip
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <Link href="/consultation">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/consultation"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Plan Trip
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link href="/consultation" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}