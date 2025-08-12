import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Statistics from '@/components/Statistics'
import CTA from '@/components/CTA'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="min-h-screen min-w-screen font-body overflow-x-hidden">
        <Header />  
        <Hero />
        <Products />
        <Statistics />
        <CTA />
        <Partners />
        <Contact />
        <Footer />
    </main>
  )
}
