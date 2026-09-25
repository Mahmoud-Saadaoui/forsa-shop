import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import products from '../data'

function CartList() {
  const { t } = useTranslation()

  return (
    <Container fluid={true}>
      <Row>
        <Col className="p-1" lg={7} md={7} sm={12}>
          {products.slice(0, 2).map((product) => (
            <Card key={product.id}>
              <Card.Body>
                <Row>
                  <Col md={3} sm={6}><img alt={t(product.nameKey)} className="cart-product-img" src={product.image} /></Col>
                  <Col className="product-name" md={6} sm={7}>
                    <h5>{t(product.nameKey)}</h5>
                    <h6>{t('cart.quantity')} = 1</h6>
                    <p>{t('product.sizes.medium')} | {t('product.colors.black')}</p>
                    <h6>{t('cart.price')} = {product.price} €</h6>
                  </Col>
                  <Col md={3} sm={2}>
                    <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i></Button>
                    <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i></Button>
                    <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i></Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col className="p-1" lg={5} md={5} sm={12}>
          <Card>
            <Card.Header><h6 className="text-center">{t('cart.information')}</h6></Card.Header>
            <Card.Body>
              <Container fluid={true}>
                <Row>
                  <div className="col-12 p-1">
                    <label className="form-label">{t('cart.city')}</label>
                    <select name="city" className="form-control" defaultValue=""><option value="" disabled>{t('cart.choose')}</option><option>Tunis</option><option>Sousse</option><option>Sfax</option></select>
                  </div>
                  <div className="col-12 p-1">
                    <label className="form-label">{t('cart.payment')}</label>
                    <select name="payment" className="form-control" defaultValue=""><option value="" disabled>{t('cart.choose')}</option><option>{t('cart.cash')}</option><option>{t('cart.card')}</option></select>
                  </div>
                  <div className="col-12 p-1"><label className="form-label" htmlFor="cart-name">{t('cart.name')}</label><input id="cart-name" name="name" className="form-control" type="text" placeholder={t('cart.name')} /></div>
                  <div className="col-12 p-1"><label className="form-label" htmlFor="cart-address">{t('cart.address')}</label><textarea id="cart-address" name="address" rows={2} className="form-control" placeholder={t('cart.address')} /></div>
                  <div className="col-12 p-1"><button className="btn site-btn">{t('cart.confirm')}</button></div>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartList
