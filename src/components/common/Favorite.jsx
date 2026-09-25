import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import products from '../data'

function Favorite() {
  const { t } = useTranslation()

  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2>{t('favorites.title')}</h2>
        <p>{t('favorites.subtitle')}</p>
      </div>
      <Row>
        {products.slice(0, 2).map((product) => (
          <Col key={product.id} className="p-1" lg={3} md={4} sm={6}>
            <Card className="image-box card w-100">
              <img alt={t(product.nameKey)} className="center w-75" src={product.image} />
              <Card.Body>
                <p className="product-name-on-card">{t(product.nameKey)}</p>
                <Button className="btn-danger btn-sm"><i className="fa fa-trash-alt"></i> {t('favorites.remove')}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Favorite
