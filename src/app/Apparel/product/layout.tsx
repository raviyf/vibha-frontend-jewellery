import Footer2 from "@modules/layout/templates/footer2"
import Nav2 from "@modules/layout/templates/nav2"
import Hero2 from "@modules/home/components/hero2"

import ProductPreview from "@modules/products/components/product-preview"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav2 />
      <Footer2 />
    </>
  )
}
