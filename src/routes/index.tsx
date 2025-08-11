import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Statistics from '@/components/Statistics'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="min-h-screen min-w-screen font-body">
        <Header />  
        <Hero />
        <Products />
        <Statistics />
        <CTA />
        <Footer />
    </main>
  )
}
