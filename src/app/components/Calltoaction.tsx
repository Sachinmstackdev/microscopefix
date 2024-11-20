import { ArrowRight } from 'lucide-react'

export default function Component() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-inter font-normal text-black mb-4 sm:mb-6 md:mb-8 leading-tight">
          Be the first to launch a map in your niche.
        </h2>
        <div className="space-y-4">
          <button className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-[20px] font-inter font-normal rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
            Create a map for free
            <ArrowRight className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </button>
          <p className="text-xs sm:text-sm text-gray-600">
            Try premium features with 15 days free trial
          </p>
        </div>
      </div>
    </section>
  )
}