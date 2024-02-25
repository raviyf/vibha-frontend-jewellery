"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"
import { useState, useEffect } from "react"
import Navbar from "./index2"
import Navbars from "./index3"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* <div className="h-2 md:h-10 lg:h-10 px-2 py-1 w-full text-sm font-holispay md:w-full lg:w-full md:text-2xl lg:text-4xl bg-black text-white text-center  align-middle">
        Receive a Vibha eternal necklace on orders above 20000
      </div> */}

      <div className="text-sm bg-black  text-white text-center font-holispay align-middle">
        Receive a Vibha eternal necklace on orders above 20000
      </div>

      <header>
        <div className="relative h-20 md:h-full px-0 duration-200 bg-white border-ui-border-base">
          <nav className="  flex items-center justify-between w-full h-full  font-optinonoy">
            <div className="flex-1 basis-0 h-full flex items-center">
              <div className="block lg:hidden">
                <Hamburger setOpen={toggle} />
              </div>
              <div className="hidden lg:block h-full">
                <SideMenu searchModalOpen={searchModalOpen} />
              </div>
            </div>
            <div>
              <Navbars />
            </div>

            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <DesktopSearchModal
                    state={searchModalState}
                    close={searchModalClose}
                    open={searchModalOpen}
                  />
                )}
                <Link
                  className="hover:text-ui-fg-base text-md font-optinonoy "
                  href="/account"
                >
                  Account
                </Link>
              </div>
              <CartDropdown />
            </div>
          </nav>

          <MobileMenu />
        </div>

        <Navbar />
      </header>
    </div>
  )
}

export default Nav
