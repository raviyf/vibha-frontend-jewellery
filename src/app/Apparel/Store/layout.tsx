import Footer2 from "@modules/layout/templates/footer2"
import Nav2 from "@modules/layout/templates/nav2"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav2 />
      {children}
      <Footer2 />
    </>
  )
}
