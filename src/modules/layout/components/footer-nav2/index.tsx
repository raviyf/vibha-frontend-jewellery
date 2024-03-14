"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import Link from "next/link"
import useCountryOptions from "@lib/hooks/use-country-options"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import { useRouter } from "next/navigation"
import Privacypolicy from "../../../../app/Returnpolicy/page"
const FooterNav2 = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()
  const { countryCode } = useStore()

  const {
    screen: [_],
  } = useMobileMenu()
  const router = useRouter()
  return (
    <div>
      <div className="xl:content-container xl:justify-between flex flex-row">
        <div className=" 2xl:pt-10">
          <text className="xl:text-4xl md:text-2xl font-optinonoy md:pb-10 pl-3 md:pl-10 xl:pl-0 ">
            Sign up and get 10% off*
          </text>

          <div className="  sm:px-0 pl-0  md:pl-10 xl:pl-0">
            <p className=" font-helvitica  text-sm md:grid md:grid-row-2   md:h-full md:p-6 p-1 pl-3 md:px-3 md:pt-6 md:w-80 w-98  ">
              Be first to receive updates on new collections,style
              inspiration,gift ideas and exclusive access. Sign up to Vibha
              Eternal Club today and receive 10% off* on your next online
              purchase(full-price items only).*Terms and condition apply.
            </p>
          </div>
          <p className="pl-3 pb-10 pt-3 md:pb-10 md:pl-12 xl:pl-0">
            <Link
              href="/account/login"
              className="top-11 px-8 py-2 rounded-full font-holispay bg-gold text-black text-center"
            >
              Join the club
            </Link>
          </p>
        </div>
        <div className="">
          <p className=" text-darkmaroon font-bold font-holispay pb-8 lg:pl-[28rem] pl-8 text-9xl sm:pl-[15rem] sm:text-[14rem] md:pl-[10rem]  ">
            V
          </p>
        </div>
      </div>
      <div>
        <div className="px-3 md:px-16 lg:px-16 flex sm:flex-row flex-col justify-between lg:pt-10 border-t-2 ">
          <div className="flex flex-row sm:flex-col pb-16">
            <div>
              <p className="text-2xl  font-optinonoy flex flex-col gap-y-2">
                Latest from Vibha
              </p>
              <p className="w-60 text-md font-helvitica">
                Be the first to know about exciting new designs,special
                events,store openings and much more
              </p>
            </div>

            <p className="pt-8">
              <a
                href="/account/login"
                className=" font-optinonoy inline-block rounded-lg px-4 py-1 border-2 border-black text-black"
              >
                SIGN UP
              </a>
            </p>
          </div>
          <div className="">
            <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
              <div className="text-small-regular s gap-x-10 md:gap-x-16">
                {/* {product_categories && (
                  <div className="flex flex-col gap-y-2 ">
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
                )} */}
                <div className="flex flex-col gap-y-2 pb-4">
                  <span className="text-2xl font-optinonoy txt-ui-fg-base">
                    Legal
                  </span>
                  <ul className="grid grid-cols-1 font-helvitica gap-y-2 text-ui-fg-subtle txt-medium">
                    <li>
                      <Link href="/Returnpolicy">Return policy</Link>
                      {/* <a href="/privacyPolicy">Privacy Policy</a> */}
                    </li>
                    <li>
                      <Link href="/TermsOfService">Terms of service</Link>

                      {/* <a href="/privacyPolicy">Privacy Policy</a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  w-full   items-center justify-between text-sm md-xs text-white  text-ui-fg-muted bg-darkmaroon ">
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

export default FooterNav2
