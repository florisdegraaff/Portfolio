import BackgroundGradient from "@/components/organism/BackgroundGradient"
import Footer from "@/components/organism/Footer"
import Navigation from "@/components/organism/Navigation"
import SmoothScroll from "@/components/organism/SmoothScroll"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SmoothScroll>
      <BackgroundGradient />
      <div className="relative z-10">
        <Navigation />
        {children}
        <Footer />
      </div>
    </SmoothScroll>
  )
}
