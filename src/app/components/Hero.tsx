"use client";

import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import Image from 'next/image';
import MapHeader from './MapHeader';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { DM_Serif_Text, DM_Sans, DM_Serif_Display } from 'next/font/google';

const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  weight: ['400'],
  subsets: ['latin'],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-dm-serif-display',
});

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="w-full px-4 md:px-8 py-4 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Macroscope Logo"
              width={180}
              height={38}
              priority
              className="text-gray-900"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className={`${dmSans.className} text-xl leading-[100%] text-gray-600 hover:text-gray-900`}>Pricing</a>
            <a href="#login" className={`${dmSans.className} text-xl leading-[100%] text-gray-600 hover:text-gray-900`}>Log in</a>
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
              <span className={`${dmSerifText.className} text-xl leading-[140%] w-[194px] h-[28px]`}>Create A Map For Free</span>
              <FaCircleArrowRight className="text-lg" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? 
              <X size={24} className="text-gray-900" /> : 
              <Menu size={24} className="text-gray-900" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#pricing" className={`${dmSans.className} text-xl leading-[100%] text-gray-600 hover:text-gray-900`}>Pricing</a>
              <a href="#login" className={`${dmSans.className} text-xl leading-[100%] text-gray-600 hover:text-gray-900`}>Log in</a>
              <button className="bg-black text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <span className={`${dmSerifText.className} text-xl leading-[140%] w-[194px] h-[28px]`}>Create A Map For Free</span>
                <FaCircleArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-12 md:pb-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto">
          <span className="block font-['DM_Sans'] font-medium mb-2 text-[#464646] px-4">
            Build authority in your niche
          </span>
          <span className="block text-[#464646] font-['DM_Sans'] font-medium mb-2 px-4">
            with{' '}
            <span className="font-['Playfair_Display'] italic text-[#000000] font-bold">
              Interactive Market Map
            </span>
            .
          </span>
        </h1>
        
        <p className={`${dmSans.className} text-base sm:text-lg md:text-[20px] leading-[140%] text-[#464646]/70 max-w-2xl mx-auto mt-4 md:mt-6 mb-6 md:mb-8 px-4`}>
          Macroscope helps you easily create interactive and insightful market maps
          that get attention, drive traffic, engage audience and boost shares.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-full flex items-center space-x-2 mx-auto hover:bg-gray-800 transition-colors">
          <span className={`${dmSerifText.className} text-xl leading-[140%] w-[194px] h-[28px]`}>Create A Map For Free</span>
          <FaCircleArrowRight className="text-lg" />
        </button>

        {/* Market Map Container - adjust height for mobile */}
        <div className="mt-8 md:mt-16">
          <MapHeader />
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse rounded-b-lg">
            <Image 
              src="/market-map-example.jpg"
              alt="Interactive Market Map Example"
              fill
              className="object-cover rounded-b-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;