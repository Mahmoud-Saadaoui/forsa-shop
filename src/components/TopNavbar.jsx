import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Col, Container, Form, FormControl, Navbar } from 'react-bootstrap'
import '../assets/css/TopNavbar.css'
import LanguageSwitcher from './common/LanguageSwitcher'

function ContainerOutsideExample() {
  const { t } = useTranslation()

  return (
    <Navbar expand="lg" variant="light" className="navbar">
      <Container fluid={true}>
        <Col lg={3} md={4} sm={12} xs={12}>
          <Navbar.Brand>
            <Link to="/" className="home-link" aria-label="Forsa">
              <img alt="Forsa" src="/logo.png" width="30" height="30" />
              {t('brand')}
            </Link>
          </Navbar.Brand>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <Form className="d-flex">
            <FormControl
              type="search"
              name="search"
              placeholder={t('nav.search')}
              className="me-0"
              aria-label={t('nav.search')}
            />
            <Link to="/search" className="Search-btn" aria-label={t('nav.search')}>
              <i className="fa fa-search"></i>
            </Link>
          </Form>
        </Col>
        <Link to="/cartList" className="cart-btn">
          <i className="fa fa-shopping-cart"></i> 0 {t('nav.cart')}
        </Link>
        <Link to="/favorites" aria-label={t('nav.favorites')}>
          <i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">0</span></sup>
        </Link>
        <Link to="/notifications" aria-label={t('nav.notifications')}>
          <i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">8</span></sup>
        </Link>
        <Link to="/login" className="user-icon" aria-label={t('nav.login')}>
          <i className="fa fa-share"></i>
        </Link>
        <Link to="/profile" className="user-icon" aria-label={t('nav.profile')}>
          <i className="fa fa-address-card"></i>
        </Link>
        <LanguageSwitcher />
      </Container>
    </Navbar>
  )
}

export default ContainerOutsideExample
