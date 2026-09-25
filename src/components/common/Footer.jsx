import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import '../../assets/css/custom.css'
import LanguageSwitcher from './LanguageSwitcher'

function Footer() {
  const { t } = useTranslation()

  return (
    <div className="footerback m-0 mt-4 pt-2 shadow-sm">
      <Container>
        <Row>
          <Col className="p-2" lg={3} md={3} sm={6}>
            <h5 className="footer-menu-title">{t('footer.contact')}</h5>
            <a className="facebook social" href="/#"><i className="fab mt-4 m-2 h4 fa-facebook"></i></a>
            <a className="facebook social" href="/#"><i className="fab m-2 h4 fa-instagram"></i></a>
            <a className="facebook social" href="/#"><i className="fab m-2 h4 fa-twitter"></i></a>
            <a className="facebook social" href="/#"><i className="fab m-2 h4 fa-linkedin"></i></a>
            <a className="facebook social" href="/#"><i className="fab m-2 h4 fa-youtube"></i></a>
          </Col>
          <Col className="p-2" lg={3} md={3} sm={6}>
            <h5 className="footer-menu-title">{t('footer.information')}</h5>
            <a className="footer-link" href="/#">{t('footer.purchase')}</a><br />
            <a className="footer-link" href="/#">{t('footer.privacy')}</a><br />
            <a className="footer-link" href="/#">{t('footer.refund')}</a><br />
          </Col>
          <Col className="p-2" lg={3} md={3} sm={6}>
            <h5 className="footer-menu-title">{t('footer.company')}</h5>
            <a className="footer-link" href="/#">{t('footer.about')}</a><br />
            <a className="footer-link" href="/#">{t('footer.company')}</a><br />
            <Link className="footer-link" to="/contact">{t('footer.contactLink')}</Link><br />
          </Col>
          <Col className="p-2" lg={3} md={3} sm={6}>
            <h5 className="footer-menu-title">{t('footer.address')}</h5>
            <p className="address">{t('contact.address')}</p>
            <span className="address"><i className="fa fa-envelope"></i> {t('contact.email')}</span>
          </Col>
        </Row>
        <h5 className="address">{t('footer.language')}</h5>
        <LanguageSwitcher />
      </Container>
      <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
        <Container>
          <Row><h6 className="address">{t('footer.rights')}</h6></Row>
        </Container>
      </Container>
    </div>
  )
}

export default Footer
