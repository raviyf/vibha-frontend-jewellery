import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Link from "next/link"

const Hero = () => {
  return (
    <div className=" row-span-3 flex flex-row  xl:pt-16 relative h-full">
      <img
        src="/Frame-3.jpg"
        alt="f1"
        className="object-cover w-full sm:w-full "
      />
      {/* <img src="/f2.png" alt="f1" className="object-cover w-48 sm:w-64" />
      <img
        // style={{
        //   height:800,width:350
        //           }}

        src="/f3.png"
        alt="f1"
        className="object-cover w-48 sm:w-64 md:w-full"
      /> */}
      <div className="absolute flex flex-col pt-[1rem] pl-[3rem] sm:pt-[10rem] sm:pl-[8rem] md:pt-[10rem] md:pl-[14rem] lg:pl-[18rem]">
        <p className=" font-optinonoy text-4xl sm:text-6xl  ">
          <span>Embrace the </span>
          <span className="text-yellow-400 ">Light</span>
        </p>
        <p className=" px-0 text-xl  font-helvitica ">
          Find your festive sparkle,a world of choices awaits
        </p>
        <div className="flex flex-row sm:px-3 px-0 py-1 sm:py-2 md:px-8 md:py-1 md:text-md text-sm">
          <Link
            href="/store"
            className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-black border-2 text-yellow-400 rounded-lg bg-white font-semibold hover:text-gray-500 transition duration-300"
          >
            <span className="md:py-2 sm:px-4  md:px-0 ">SHOP NOW</span>
          </Link>
          <span className="md:py-2 sm:py-2 md:px-4 sm:px-8 px-6 py-2">
            <Link
              href="/store"
              className="md:py-3 md:px-8 px-2 py-3 font-holispay border-white border-3 text-yellow-400 rounded-lg bg-black font-semibold hover:text-gray-500 transition duration-300"
            >
              DISCOVER MORE
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
