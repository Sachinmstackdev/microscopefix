'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500'] })

interface Feature {
  title: string
  description: string
  image: string
}

export default function Component() {
  const features: Feature[] = [
    {
      title: "Configure Layout",
      description: "Organize the groups on the map with easily drag-and-drop. Resize the group with with auto adjusting items.",
      image: "/images/placeholder.png",
    },
    {
      title: "Customize Style",
      description: "Tailor the style, shape and colors both at a group level and a map level to make the map look unique and reflect your style.",
      image: "/images/placeholder.png",
    },
    {
      title: "Manage Data",
      description: "Easily add and update data in a familiar, Google Sheets like interface, for a smooth and streamlined data management.",
      image: "/images/placeholder.png",
    },
    {
      title: "Export as Image",
      description: "Export the map as high-quality images for sharing on your social media, newsletter and presentation.",
      image: "/images/placeholder.png",
    },
    {
      title: "Publish as Website",
      description: "Publish the map on your domain or embed it inside your web page. The published map is optimized for SEO out of the box.",
      image: "/images/placeholder.png",
    },
    {
      title: "Analyze Traffic",
      description: "Get real-time analytics of traffic and events across the map and pages. Analytics Powered by Umami.is",
      image: "/images/placeholder.png",
    },
  ]

  return (
    <div className="w-full bg-[#F3F2F0]">
      <section className={`w-full px-4 sm:px-6 md:px-8 lg:px-[120px] py-8 sm:py-12 lg:py-20 text-center ${dmSans.className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 lg:mb-8 border border-black rounded-full">
            <span className="text-xs sm:text-sm tracking-wide text-gray-900">
              FEATURES
            </span>
          </div>
          
          <h2 className="font-['DM_Sans'] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[105%] text-[#464646] max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6">
            All you need to create interactive market maps,
            in one place
          </h2>
        </div>

        <div className="mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] sm:gap-5 justify-items-center">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col w-full max-w-[387px] h-auto sm:h-[499px] overflow-hidden"
              >
                <div className="h-[313px] w-[363px] bg-gray-100 overflow-hidden relative mx-auto mt-3 rounded-t-[12px] rounded-r-[12px] rounded-l-[12px]">
                  <Image 
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e: any) => {
                      e.currentTarget.src = '/images/placeholder.png'
                    }}
                  />
                </div>
                <div className="pt-6 px-6 pb-[51px] flex-grow">
                  <h3 className="font-['DM_Sans'] text-2xl font-extrabold leading-[105%] text-[#464646] mb-2 text-left">
                    {feature.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-base font-medium leading-[24px] text-[#464646]/80 text-left w-[339px] h-[66px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}