import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DataDriven from './components/DataDriven'
import ServicesDark from './components/ServicesDark'
import CaseStudies from './components/CaseStudies'
import Logos from './components/Logos'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-28">
        <Hero />
        <DataDriven />
        <ServicesDark />
        <CaseStudies />
        <Logos />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
