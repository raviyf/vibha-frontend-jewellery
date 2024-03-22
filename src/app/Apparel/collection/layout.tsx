import Footer2 from "@modules/layout/templates/footer2"
import Nav2 from "@modules/layout/templates/nav2"
import Hero2 from "@modules/home/components/hero2"
import StoreTemplate from "@modules/store/templates"
import StoreTemplate2 from "@modules/storetemplate2/page"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav2 />
      <div className="bg-gradient-to-t from-70% via-cream to-white">
        <StoreTemplate2 />
        {children}
      </div>
      <Footer2 />
    </>
  )
}
