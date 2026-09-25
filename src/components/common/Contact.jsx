import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import '../../assets/css/custom.css'

function Contact() {
  const { t } = useTranslation()

  return (
    <Container>
      <Row className="p-2">
        <Col className="shadow-sm bg-white mt-2" md={12}>
          <Row className="text-center">
            <Col className="p-3 m-0" md={6} sm={12}>
              <p>{t('contact.address')}<br />{t('contact.email')}</p>
              <iframe title="forsa location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201549.65020671624!2d32.36639610609625!3d37.87869451502662" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </Col>
            <Col className="justify-content-center d-flex" md={6} sm={12}>
              <Form id="contactForm" className="onboardForm">
                <h4 className="section-title-login">{t('contact.title')}</h4>
                <h6 className="section-sub-title">{t('contact.subtitle')}</h6>
                <input id="contact-name" name="name" className="form-control m-2" type="text" placeholder={t('contact.name')} aria-label={t('contact.name')} />
                <input id="contact-email" name="email" className="form-control m-2" type="email" placeholder={t('contact.emailInput')} aria-label={t('contact.emailInput')} />
                <Form.Control id="contact-message" name="message" className="form-control m-2" as="textarea" rows={3} placeholder={t('contact.message')} aria-label={t('contact.message')} />
                <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login">{t('contact.send')}</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
