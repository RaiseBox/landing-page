import Navbar          from './components/Navbar/Navbar'
import Hero            from './components/Hero/Hero'
import InfoSection     from './components/InfoSection/InfoSection'
import WhySection      from './components/WhySection/WhySection'
import EfficiencySection from './components/EfficiencySection/EfficiencySection'
import MVSection       from './components/MVSection/MVSection'
import CTASection      from './components/CTASection/CTASection'
import Footer          from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoSection />
        <WhySection />
        <EfficiencySection />
        <MVSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
