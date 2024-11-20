'use client'

import React from 'react';
import { DM_Sans } from 'next/font/google'
import Image from 'next/image';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500'] })

const Usecase = () => {
  const cards = [
    {
      title: "Creators",
      description: "Create a market map of your niche that becomes a go-to resource for your audience and drive qualified leads to your courses, newsletter, YouTube and more.",
      image: "/images/creators-placeholder.png",
    },
    {
      title: "Directory Makers",
      description: "Turn your directory data into a visually engaging market map that easily captures attention, gets shared on social media, and drives traffic back to your directory site.",
      image: "/images/placeholder.png",
    },
    {
      title: "Directory Makers",
      description: "Engage your community members with a crowed-sourced map that promotes active participation and discussions, while creating a valuable asset for the community.",
      image: "/images/placeholder.png",
    }
  ];

  return (
    <div className="w-full bg-[#F3F2F0]">
      <section className={`w-full px-4 sm:px-6 md:px-8 lg:px-[120px] xl:px-[160px] 2xl:px-[200px] py-8 sm:py-12 lg:py-20 text-center ${dmSans.className}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 lg:mb-8 border border-black rounded-full">
            <span className="text-xs sm:text-sm tracking-wide text-gray-900">
              USE CASES
            </span>
          </div>
          
          <p className="font-['DM_Sans'] font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-[105%] text-[#464646] max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6">
            Create interactive and insightful market maps that get attention, drive traffic, engage audience and boost shares.
          </p>
        </div>

        <div className="mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[20px] justify-items-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-[12px] border-white flex flex-col w-full max-w-[387px] min-h-[450px] sm:h-[499px] overflow-hidden"
              >
                <div className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[313px] w-full bg-gray-100 rounded-[16px] overflow-hidden relative">
                  <Image 
                    src={card.image}
                    alt={`${card.title} illustration`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    onError={(e: any) => {
                      e.currentTarget.src = '/images/placeholder.png'
                    }}
                  />
                </div>
                <div className="mt-4 sm:mt-6 mx-3 sm:mx-6 pb-4 sm:pb-6">
                  <h3 className="font-['DM_Sans'] font-extrabold text-base sm:text-lg lg:text-xl xl:text-2xl text-[#464646] mb-2 text-left">
                    {card.title}
                  </h3>
                  <p className="font-['DM_Sans'] font-medium text-sm sm:text-[14px] lg:text-[16px] text-[#464646]/80 text-left leading-[20px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Usecase;