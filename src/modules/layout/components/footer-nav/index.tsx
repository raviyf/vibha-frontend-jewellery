"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div>
      <div className="flex flex-row">
        <div className="2xl:pl-20">
          <text className="xl:text-4xl md:text-2xl font-optinonoy md:pb-10 md:px-4 px-10 2xl:pl-48 md:pl-36">
            Sign up and get 10% off*
          </text>
          <div className="md:pl-32 2xl:pl-48  sm:px-0 pl-0  ">
            <p className=" font-helvitica  text-sm md:grid md:grid-row-2 md:gap-4 md:place-content-center md:h-full md:p-6 p-1 pl-3 md:px-3 md:pt-6 md:w-80 w-98  ">
              Be first to receive updates on new collections,style
              inspiration,gift ideas and exclusive access. Sign up to Vibha
              Eternal Club today and receive 10% off* on your next online
              purchase(full-price items only).*Terms and condition apply.
            </p>
          </div>
          <p className="pl-10 pb-10 pt-3 2xl:pl-52 md:pb-10 md:pl-40">
            <a
              href="http://localhost:8000/account/login"
              className="top-11 px-8 py-2 rounded-full bg-orange-300 text-black text-center"
            >
              Join the club
            </a>
          </p>
        </div>
        <div className="2xl:pl-64">
          <p className=" absolute font-bold font-holispay md:text-9xl px-10  lg:pl-96 py-10 text-8xl md:pl-48">
            V
          </p>
        </div>
      </div>
      <div>
        <div className="border-t border-ui-border-base w-screen">
          <div className="content-container flex flex-col">
            <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
              <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
                {product_categories && (
                  <div className="flex flex-col gap-y-2">
                    <span className="text-2xl font-optinonoy txt-ui-fg-base">
                      About Us
                    </span>
                    <ul className="grid grid-cols-1 font-helvitica gap-y-2 text-ui-fg-subtle txt-medium">
                      <li>World of vibha</li>
                      <li>Jobs and career</li>
                      <li>For professionals</li>
                      <li>Site maps</li>
                      <li>Sustainability</li>
                      <li>Website Policies</li>
                      <li>Transperency</li>
                      <li>Supply chain act</li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-2">
                      {product_categories?.slice(0, 6).map((c) => {
                        if (c.parent_category) {
                          return
                        }

                        const children =
                          c.category_children?.map((child) => ({
                            name: child.name,
                            handle: child.handle,
                            id: child.id,
                          })) || null

                        return (
                          <li
                            className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                            key={c.id}
                          >
                            <Link
                              className={clsx(
                                "hover:text-ui-fg-base",
                                children && "txt-small-plus"
                              )}
                              href={`/${c.handle}`}
                            >
                              {c.name}
                            </Link>
                            {children && (
                              <ul className="grid grid-cols-1 ml-3 gap-2">
                                {children &&
                                  children.map((child) => (
                                    <li key={child.id}>
                                      <Link
                                        className="hover:text-ui-fg-base"
                                        href={`/${child.handle}`}
                                      >
                                        {child.name}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
                {collections && (
                  <div className="flex flex-col gap-y-2">
                    <span className="text-2xl font-optinonoy txt-ui-fg-base">
                      Client care
                    </span>
                    <ul
                      className={clsx(
                        "grid grid-cols-1 gap-2 text-ui-fg-subtle font-helvitica txt-medium",
                        {
                          "grid-cols-2": (collections?.length || 0) > 3,
                        }
                      )}
                    >
                      <li>Contact Us</li>
                      <li>Track your order</li>
                      <li>Product Care and Repair</li>
                      <li>Shipping and Repair</li>
                      <li>Gift Cards</li>
                      <li>FAQ</li>
                      {collections?.slice(0, 6).map((c) => (
                        <li key={c.id}>
                          <Link
                            className="hover:text-ui-fg-base"
                            href={`/collections/${c.handle}`}
                          >
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-col gap-y-2">
                  <span className="text-2xl font-optinonoy txt-ui-fg-base">
                    Legal
                  </span>
                  <ul className="grid grid-cols-1 font-helvitica gap-y-2 text-ui-fg-subtle txt-medium">
                    <li>
                      <a
                        href="https://github.com/medusajs"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-ui-fg-base"
                      >
                        Terms and conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.medusajs.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-ui-fg-base"
                      >
                        Terms of use
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/medusajs/nextjs-starter-medusa"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-ui-fg-base"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>Cookie consent</li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-2xl  font-optinonoy flex flex-col gap-y-2">
                  Latest from Vibha
                </p>
                <p className="w-60 text-md font-helvitica md-md">
                  Be the first to know about exciting new designs,special
                  events,store openings and much more
                </p>
                {/* <input
                  type="text"
                  className="rounded-full font-helvitica p-2 bg-white/60"
                  placeholder="Email"
                      />*/}

                <a
                  href="http://localhost:8000/account/login"
                  className=" font-optinonoy inline-block rounded-lg px-4 py-2  bg-yellow-400 text-black"
                >
                  SIGN UP
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  w-full   items-center justify-between text-sm md-xs   text-ui-fg-muted bg-black ">
          <Link href="/" className="text-2xl md:pl-10 font-optinonoy md-6xl ">
            VIBHA
          </Link>
          <p className="flex flex-col font-optinonoy md:px-1 md:pr-10 px-12">
            <span className="txt-compact-small ">
              © {new Date().getFullYear()} VIBHA. All rights reserved.
            </span>
            <span>
              VIBHA and the V logo are registered and trademarks of VIBHA.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
