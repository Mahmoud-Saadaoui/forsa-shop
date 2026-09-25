import React from 'react'
import { useTranslation } from 'react-i18next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slickModule from 'react-slick'

const Slider = slickModule.default || slickModule

function HomeSlider() {
  const { t } = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  }
  const sliderImages = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1800&q=85',
  ]

  return (
    <section className="home-hero">
      <Slider {...settings}>
        {sliderImages.map((src, index) => (
          <div key={src} className="hero-slide">
            <img className="slider_image" alt={t('home.shopNow')} src={src} />
            {index === 0 && (
              <div className="hero-copy">
                <p className="hero-kicker">Forsa | 2026</p>
                <h1>{t('home.subtitle')}</h1>
                <a href="#collection" className="btn site-btn">{t('home.shopNow')}</a>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default HomeSlider
