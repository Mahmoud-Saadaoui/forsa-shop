import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import products from '../data'
import ProductCard from './ProductCard'

function ProductCategory() {
  const { t } = useTranslation()

  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2>{t('home.categories')}</h2>
        <p>{t('home.categoriesSubtitle')}</p>
      </div>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="p-1" lg={3} md={4} sm={6}>
            <ProductCard product={product} imageClassName="center w-75" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductCategory
