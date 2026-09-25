import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import 'react-inner-image-zoom/lib/styles.min.css'
import InnerImageZoom from 'react-inner-image-zoom'
import products from '../data'

function ProductDetails() {
  const { t } = useTranslation()
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [previewImg, setPreviewImg] = useState(product.image)

  useEffect(() => {
    setPreviewImg(product.image)
  }, [product.image])

  const thumbnails = [product.image]

  return (
    <Container fluid={true}>
      <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            {t('search.home')}
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/category' }}>
            {t('search.catalog')}
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t('search.results')}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row className="p-2">
        <Col className="shadow-sm bg-white pb-3 mt-4" md={12}>
          <Row>
            <Col className="p-3" md={6} sm={12}>
              <Row className="p-2">
                <Col md={2} sm={12}>
                  {thumbnails.map((image) => (
                    <Col key={image} className="p-0 m-0" md={12} sm={3}>
                      <img
                        className="smallimage product-sm-img"
                        src={image}
                        alt={t(product.nameKey)}
                        onClick={() => setPreviewImg(image)}
                      />
                    </Col>
                  ))}
                </Col>
                <Col md={10} sm={12}>
                   <InnerImageZoom
                     className="main-image product-zoom"
                     src={previewImg}
                     zoomSrc={previewImg}
                     zoomType="click"
                     zoomScale={1.5}
                     zoomPreload
                     fullscreenOnMobile
                     alt={t(product.nameKey)}
                   />
                   <p className="zoom-hint">{t('product.zoomHint')}</p>
                </Col>
              </Row>
            </Col>
            <Col className="p-3" md={6} sm={12}>
              <h5 className="Product-Name">{t(product.nameKey)}</h5>
              <h6 className="section-sub-title">{t('home.subtitle')}</h6>
              <h4>{product.price} €</h4>
              <h6 className="mt-2">{t('product.category')} : <b>{t(`categories.${product.category}`)}</b></h6>
              <h6 className="mt-2">{t('product.subcategory')} : <b>{t('categories.tops')}</b></h6>
              <h6 className="mt-2">{t('product.brand')} : <b>forsa</b></h6>
              <h6 className="mt-2">{t('product.code')} : <b>AF-{product.id}</b></h6>
              <div>
                <h6 className="mt-2">{t('product.color')}</h6>
                <select name="color" className="form-control form-select" defaultValue="black">
                  <option value="black">{t('product.colors.black')}</option>
                  <option value="white">{t('product.colors.white')}</option>
                  <option value="beige">{t('product.colors.beige')}</option>
                  <option value="blue">{t('product.colors.blue')}</option>
                </select>
              </div>
              <div>
                <h6 className="mt-2">{t('product.size')}</h6>
                <select name="size" className="form-control form-select" defaultValue="medium">
                  <option value="small">{t('product.sizes.small')}</option>
                  <option value="medium">{t('product.sizes.medium')}</option>
                  <option value="large">{t('product.sizes.large')}</option>
                </select>
              </div>
              <div>
                <h6 className="mt-2">{t('product.quantity')}</h6>
                <select name="quantity" className="form-control form-select" defaultValue="01">
                  {[1, 2, 3, 4, 5].map((quantity) => <option key={quantity} value={quantity}>{quantity}</option>)}
                </select>
              </div>
              <div className="input-group mt-3">
                <button className="btn site-btn m-1"><i className="fa fa-shopping-cart"></i> {t('product.addToCart')}</button>
                <button className="btn btn-success m-1"><i className="fa fa-car"></i> {t('product.orderNow')}</button>
                <button className="btn btn-secondary m-1"><i className="fa fa-heart"></i> {t('product.addToFavorites')}</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <h6 className="mt-2">{t('product.details')}</h6>
              <p>{t('product.description')}</p>
            </Col>
            <Col md={6} sm={12}><h6 className="mt-2">{t('product.review')}</h6></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails
