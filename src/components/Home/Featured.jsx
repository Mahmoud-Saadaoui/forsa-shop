import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import '../../assets/css/custom.css'
import products from '../data'
import ProductCard from '../Products/ProductCard'

function Featured() {
  const { t } = useTranslation()

  return (
    <section className="home-section">
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>{t('home.featured')}</h2>
          <p>{t('home.categoriesSubtitle')}</p>
        </div>
        <Row>
          {products.slice(2, 8).map((product) => (
            <Col key={product.id} className="p-1" lg={2} md={4} sm={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Featured
