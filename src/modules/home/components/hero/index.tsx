import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="flex flex-row 2xl:pt-16 relative h-full">
      <img
        src="/f1.png"
        alt="f1"
        className="object-cover xl:w-128 lg:w-97 2xl:w-102 sm:w-101 md:w-100 w-99"
      />
      <img
        src="/f2.png"
        alt="f1"
        className="object-cover xl:w-128 lg:w-97 sm:w-101 2xl:w-102 md:w-100 w-99"
      />
      <img
        src="/f3.png"
        alt="f1"
        className="object-cover xl:w-128 lg:w-97 sm:w-101 2xl:w-102 md:w-100 w-99"
      />
      <div className=" absolute flex flex-col text-lg xl:pl-80 lg:px-44 2xl:ml-96 md:px-10 py-52 pl-20 md:ml-48 md:py-48 ">
        <p className="font-optinonoy text-2xl md:text-6xl sm:text-lg ">
          <span>Embrace the </span>
          <span className="text-yellow-300">Light</span>
        </p>
        <p className="px-0 text-md sm:text-md md:text-lg font-helvitica md:px-8">
          Find your festive sparkle,a world of choices awaits
        </p>
        <div className="flex flex-row sm:px-3 px-0 py-1 sm:py-2 md:px-8 md:py-1 md:text-md text-sm">
          <Link
            href="http://localhost:8000/store"
            className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-black border-2 text-yellow-400 rounded-lg bg-white font-semibold hover:text-gray-500 transition duration-300"
          >
            <span className="md:py-2 sm:px-4  md:px-0 ">SHOP NOW</span>
          </Link>
          <span className="md:py-2 sm:py-2 md:px-4 sm:px-8 px-6 py-2">
            <a
              href="http://localhost:8000/store"
              className="md:py-3 md:px-8 px-2 py-3 font-holispay border-white border-3 text-yellow-400 rounded-lg bg-black font-semibold hover:text-gray-500 transition duration-300"
            >
              DISCOVER MORE
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
