import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import '../../assets/css/custom.css'
import products from '../data'
import ProductCard from '../Products/ProductCard'

function Collection() {
  const { t } = useTranslation()

  return (
    <section id="collection" className="home-section">
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>{t('home.collection')}</h2>
          <p>{t('common.collectionSubtitle')}</p>
        </div>
        <Row>
          {products.slice(0, 6).map((product) => (
            <Col key={product.id} className="p-1" lg={2} md={4} sm={6}>
            <ProductCard product={product} imageClassName="center w-75" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Collection
