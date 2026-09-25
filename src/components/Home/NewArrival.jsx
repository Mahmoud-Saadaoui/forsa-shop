import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slickModule from 'react-slick'
import products from '../data'
import '../../assets/css/custom.css'
import ProductCard from '../Products/ProductCard'

const Slider = slickModule.default || slickModule

function NewArrival() {
  const { t } = useTranslation()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="home-section">
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>{t('home.newArrival')}</h2>
          <p>{t('home.categoriesSubtitle')}</p>
        </div>
        <Row>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} className="image-box card" />
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  )
}

export default NewArrival
