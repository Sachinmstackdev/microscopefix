import Hero from './components/Hero'
import Usecase from './components/Usecase'
import HowItWorks from './components/videosection'
import Pricing from './components/Pricing'
import FAQsection from './components/FAQsection'
import Calltoaction from './components/Calltoaction'
import Footer from './components/Footer'
import Feature from './components/Feature'
import ErrorBoundary from './components/ErrorBoundary'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Hero />
        <Usecase />
        <HowItWorks />
        <Feature />
        <Pricing />
        <FAQsection />
        <Calltoaction />
        <Footer />
      </ErrorBoundary>
    </main>
  )
}
