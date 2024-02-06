import { useState, useEffect } from "react"

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed w-full transition-duration-500 transition-opacity delay-300 transform ${
        show ? "translate-y-0" : "-translate-y-100"
      }`}
    >
      <div>
        <div className="bg-white">
          <div className=" hidden md:grid grid-cols-8 justify-between">
            <a
              href=""
              className="py-4 px-2 font-optinonoy text-black    hover:text-gray-500 transition duration-300"
            >
              ALL JEWELLERY
            </a>
            <a
              href=""
              className="py-4 px-2 font-optinonoy text-black   hover:text-gray-500 transition duration-300"
            >
              NEW IN
            </a>
            <a
              href=""
              className="py-4 px-2 text-black font-optinonoy   hover:text-gray-500 transition duration-300"
            >
              DIAMOND
            </a>

            <a
              href=""
              className="py-4 px-2 text-black font-optinonoy   hover:text-gray-500 transition duration-300"
            >
              COLLECTIONS
            </a>
            <a
              href=""
              className="pl-4 py-4 px-2 text-black font-optinonoy   hover:text-gray-500 transition duration-300"
            >
              WEDDING
            </a>
            <a
              href=""
              className="py-4 px-2 text-black font-optinonoy   hover:text-gray-500 transition duration-300"
            >
              GIFTING
            </a>
            <a
              href=""
              className="py-4 px-2 text-black font-optinonoy   hover:text-gray-500 transition duration-300"
            >
              ETERNAL
            </a>
            <a
              href=""
              className="py-4 px-2 text-black font-optinonoy   hover:text-gray-500 transition duration-300"
            >
              OUTLETS
            </a>
            {/* <a
        href=""
        className="py-4 px-2 text-gray-500   hover:text-green-500 transition duration-300"
      >
        MORE
      </a> */}
            {/*<button className="flex flex-row md-flex uppercase border-b bg-white">
      <span>All jewellery</span>
      <span>New In</span>
      <span>Diamond</span>
      <span>Collection</span>
      <span>Wedding</span>
      <span>Gifting</span>
      <span>Outlets</span>
      <span>Dress</span>
    </button>*/}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
