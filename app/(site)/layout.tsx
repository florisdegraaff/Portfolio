import Footer from "@/components/organism/Footer"
import Navigation from "@/components/organism/Navigation"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
