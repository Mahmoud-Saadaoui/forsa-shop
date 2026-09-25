import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import products from '../data'

function OrderList() {
  const { t } = useTranslation()

  return (
    <>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55"><h2>{t('profile.title')}</h2></div>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12}>
            <ul className="list-group">
              <li className="list-group-item">{t('profile.name')} : Mahmoud</li>
              <li className="list-group-item">{t('profile.email')} : mahmoud@mail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="section-title text-center mb-55"><h2>{t('profile.history')}</h2></div>
        <Card>
          <Card.Body>
            <Row>
              {products.slice(0, 4).map((product) => (
                <Col key={product.id} md={6} sm={12}>
                  <h5 className="product-name">{t(product.nameKey)}</h5>
                  <h6>{t('cart.quantity')} = 1</h6>
                  <p>{t('product.sizes.medium')} | {t('product.colors.black')}</p>
                  <h6>{t('cart.price')} = {product.price} €</h6>
                  <h6>{t('profile.status')} = {t('profile.pending')}</h6>
                  <Button className="btn btn-danger">{t('profile.review')}</Button>
                  <hr />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default OrderList
