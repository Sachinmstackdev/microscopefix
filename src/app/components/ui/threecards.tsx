import React from 'react'

interface CustomCardProps {
  title: string
  description: string
  imageUrl: string
  link?: string
}

export function CustomCard({ title, description, imageUrl }: CustomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-blue-600">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}