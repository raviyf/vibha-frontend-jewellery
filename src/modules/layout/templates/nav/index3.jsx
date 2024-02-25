import React, { useState, useEffect } from "react"
import Link from "next/link"
import { size } from "lodash"

export default function Navbars() {
  const [navSize, setnavSize] = useState("6rem")
  const [navColor, setnavColor] = useState("")
  const [fontySize, setfontySize] = useState("6em")
  const listenScrollEvent = () => {
    window.scrollY > 0 ? setnavColor("") : setnavColor("")
    window.scrollY > 0 ? setnavSize("5rem") : setnavSize("6rem")
    window.scrollY > 0 ? setfontySize("2.25rem") : setfontySize("6rem")
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  return (
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 0.75s",
        }}
      >
        <div className="flex items-center h-full transition-none">
          <Link
            // style={{ fontSize: fontySize }}
            href="/"
            className="text-4xl font-holispay xl:{fontySize} text-black uppercase transition-none"
          >
            CASA Vibha
          </Link>
        </div>
      </nav>
    </div>
  )
}
