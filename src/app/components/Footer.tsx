import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaReddit } from "react-icons/fa6";
import Image from 'next/image';
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full pb-6 sm:pb-12 bg-white">
      <div className="border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Image
                src="/Footer-Logo.png"
                alt="Macroscope Logo"
                width={200}
                height={48}
                className="w-[180px] sm:w-[200px] md:w-[250px]"
                style={{ height: 'auto' }}
              />
              <p className="text-xs sm:text-sm text-center md:text-left max-w-md">
                Create Interactive Market Maps that helps you <br className="hidden sm:block" /> build authority in your niche and drive traffic
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">Twitter</span>
                <FaSquareXTwitter className="h-8 w-8" />
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">Reddit</span>
                <FaReddit className="h-8 w-8" />
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">Discord</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <span className="sr-only">Email</span>
                <IoIosMail className="h-10 w-10 -mt-1" />
              </a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span>© 2024 Macroscope. All rights reserved</span>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900">Terms of Service</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}