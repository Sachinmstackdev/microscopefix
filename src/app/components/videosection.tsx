'use client'

import { useState, useRef, useEffect } from 'react'

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const steps = [
    {
      title: "Add or import data",
      description: "Add the data manually or simply copy paste data from Google Sheet or Excel",
      media: {
        type: "image",
        src: "/images/import-data.jpg",
        videoTimestamp: 0
      }
    },
    {
      title: "Organize the map",
      description: "Rearrange and resize groups freely in the map in a way that makes most sense",
      media: {
        type: "image",
        src: "/images/organize-map.jpg",
        videoTimestamp: 15
      }
    },
    {
      title: "Customize the map theme",
      description: "Customize the map's look and feel using the suite of styling options.",
      media: {
        type: "image",
        src: "/images/customize-theme.jpg",
        videoTimestamp: 30
      }
    },
    {
      title: "Publish the Map",
      description: "Export as website, embed inside your website or download an image",
      media: {
        type: "video",
        src: "/videos/how-it-works.mp4",
        videoTimestamp: 0
      }
    }
  ]

  const handleStepHover = (index: number) => {
    setActiveStep(index)
    if (steps[index].media.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = steps[index].media.videoTimestamp
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log(err))
    }
  }

  const handleStepLeave = () => {
    if (videoRef.current && steps[activeStep].media.type === 'video') {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleCardClick = (index: number) => {
    if (steps[index].media.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log(err))
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const testImage = new Image();
    testImage.src = '/images/customize-theme.jpg';
    testImage.onload = () => console.log('customize-theme.jpg loaded successfully');
    testImage.onerror = (e) => console.error('customize-theme.jpg failed to load', e);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-4">
          <span className="inline-block px-4 py-1 text-[#464646] bg-[#F3F2F0] rounded-full text-sm border border-black font-medium">
            HOW IT WORKS
          </span>
        </div>
        <h3 className="font-['DM_Sans'] font-normal text-[48px] leading-[105%] text-[#464646] max-w-[1200px] mx-auto mb-12 text-center">
          We've made it easy to create and publish maps<br />
          so you can focus on research and curation.
        </h3>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer
                  ${activeStep === index ? 'border-2 border-black' : 'border border-gray-200'}`}
                onMouseEnter={() => handleStepHover(index)}
                onMouseLeave={handleStepLeave}
              >
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <hr className="mt-6 border-gray-200" />
                )}
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 relative bg-white rounded-lg shadow-md overflow-hidden aspect-video">
            <div className={`absolute inset-0 transition-opacity duration-300 
              ${steps[activeStep].media.type === 'video' && videoRef.current && !videoRef.current.paused ? 'opacity-0' : 'opacity-100'}`}>
              <img
                src={steps[activeStep].media.src}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {steps[activeStep].media.type === 'video' && (
              <video
                ref={videoRef}
                src="/videos/how-it-works.mp4"
                className="w-full h-full object-cover"
                playsInline
                muted
                loop
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}