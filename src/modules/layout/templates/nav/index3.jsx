import React, { useState, useEffect } from "react"
import Link from "next/link"
import { size } from "lodash"

export default function Navbars() {
  const [navSize, setnavSize] = useState("10rem")
  const [navColor, setnavColor] = useState("#fafafa")
  const [fontySize, setfontySize] = useState("")
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fafafa") : setnavColor("#fafafa")
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem")
    window.scrollY > 10 ? setfontySize("2.25rem") : setfontySize("6rem")
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
          transition: "all 0.5s",
        }}
      >
        <div className="flex items-center h-full transition-none">
          <Link
            style={{ fontSize: fontySize }}
            href="/"
            className=" font-holispay  text-black uppercase transition-none"
          >
            Vibha
          </Link>
        </div>
      </nav>
    </div>
  )
}
