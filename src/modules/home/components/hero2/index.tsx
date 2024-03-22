import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Link from "next/link"

const Hero2 = () => {
  return (
    <div>
      <div className="flex flex-row relative h-full">
        <img src="/home.png" alt="home" className="object-cover" />
        <div className=" absolute flex flex-col  text-lg pt-[8rem] pl-[2rem] sm:pt-[10rem] sm:pl-[6rem] md:pt-[14rem] md:pl-[8rem] lg:pt-[20rem] lg:pl-[10rem] xl:pt-[20rem] xl:pl-[14rem]">
          <p className="font-optinonoy text-cream  text-2xl sm:text-4xl md:text-5xl xl:text-7xl   ">
            <span>Epitome of poise, beauty and grace </span>
          </p>

          <div className="flex flex-row sm:pl-[8rem] md:pl-[14rem] pl-[6rem] py-4 xl:pl-[20rem]">
            <Link href={`/Apparel/collection/apparel`}>
              <span className="md:py-2 sm:px-4 rounded-full md:px-10 2xl:px-40 px-3 py-2 font-optinonoy bg-cream text-black  ">
                SHOP NOW
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="2xl:pt-24 py-5 text-3xl font-optinonoy text-center">
        Shop by category
      </div>
      <div className="flex flex-col 2xl:pt-16 relative h-full">
        <span className="flex flex-col text-center text-xl font-optinonoy">
          <img src="/f4.jpg" alt="f1" className="object-cover " />
          {/* <span className="p-3"> Kanchipuram</span>
        </span>
        <span className="flex flex-col text-xl text-center font-optinonoy">
          <img
            src="/f2.png"
            alt="f1"
            className="object-cover xl:w-128 lg:w-97 sm:w-101 2xl:w-102 md:w-100 w-99"
          />
          <span className="p-3"> Churidar</span>
        </span>
        <span className="flex flex-col text-xl text-center font-optinonoy">
          <img
            src="/f3.png"
            alt="f1"
            className="object-cover xl:w-128 lg:w-97 sm:w-101 2xl:w-102 md:w-100 w-99"
          />

          <span className="p-3"> Benares</span>*/}
        </span>
      </div>
      <p className="p-5  flex flex-row font-optinonoy items-center justify-between">
        <Link
          href="/collections/apparel"
          className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-black border-2 text-yellow-400 rounded-lg bg-white font-semibold hover:text-gray-500 transition duration-300"
        >
          <span className=""> Chudidhar</span>
        </Link>
        <Link
          href="/collections/apparel"
          className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-black border-2 text-yellow-400 rounded-lg bg-white font-semibold hover:text-gray-500 transition duration-300"
        >
          <span className="">Saree</span>
        </Link>
        <Link
          href="/collections/apparel"
          className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-black border-2 text-yellow-400 rounded-lg bg-white font-semibold hover:text-gray-500 transition duration-300"
        >
          <span className="">Benares</span>
        </Link>
      </p>

      <div>
        <div className="text-center p-10 text-3xl font-optinonoy">
          Eternal by Vibha
        </div>
        <div className="text-center relative flex flex-col 2xl:text-2xl text-sm ">
          <img src="/image 2.png" alt="image 2" className="object-cover " />
          <p className="pt-[3rem] sm:pt-[7rem] sm:pl-[3rem] md:pt-[10rem] md:pl-[1rem] uppercase lg:pt-[13rem] xl:pt-[20rem] xl:pl-[8rem] text-cream md:text-3xl  font-optinonoy absolute">
            <p className="p-5">
              <span className=""> Elegance </span>
              <span className="">Redefined</span>
            </p>
            <text>
              Experience our exclusive touch of designs only at eternal by vibha
            </text>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero2
