import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import products from '../data'
import ProductCard from './ProductCard'

function SearchProduct() {
  const { t } = useTranslation()

  return (
    <Container className="text-center" fluid={true}>
      <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item href="#">{t('search.home')}</Breadcrumb.Item>
          <Breadcrumb.Item href="">{t('search.catalog')}</Breadcrumb.Item>
          <Breadcrumb.Item>{t('search.results')}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="section-title text-center mb-55">
        <h2>{t('search.title')}</h2>
        <p>{t('search.subtitle')}</p>
      </div>
      <Row>
        {products.slice(0, 4).map((product) => (
          <Col key={product.id} className="p-1" lg={3} md={4} sm={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SearchProduct
