import React from 'react'
import FooterSection from './FooterSection/FooterSection'
import SeasonalSection from './SeasonalSection/SeasonalSection'
import TopbarCarousel from './TopbarCarousel/TopbarCarousel'
import './HomePage.css'
import TrendingProductsSection from './TrendingProductsSection/TrendingProductsSection'
import TypeProductsSection from './TypeProductsSection/TypeProductsSection'
import ReviewSection from './ReviewSection/ReviewSection'
import ContactSection from './ContactSection/ContactSection'

function HomePage() {
  return (
    <main className='homePage'>
      <TopbarCarousel />
      <TrendingProductsSection />
      <TypeProductsSection />
      <SeasonalSection />
      <ReviewSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default HomePage