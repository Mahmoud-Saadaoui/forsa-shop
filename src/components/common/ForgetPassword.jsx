import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  const { t } = useTranslation()

  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <Form className="onboardForm">
                <h4 className="section-title-login">{t('auth.forgot')}</h4>
                <input id="forgot-email" name="email" autoComplete="email" className="form-control m-2" type="email" placeholder={t('auth.email')} aria-label={t('auth.email')} />
                <Button type="submit" className="btn btn-block m-2 site-btn-login">{t('auth.forgotLink')}</Button>
                <hr />
                <p><b>{t('auth.alreadyUser')}</b> <Link to="/login"><b>{t('auth.login')}</b></Link></p>
                <p><b>{t('auth.newUser')}</b> <Link to="/register"><b>{t('auth.registerLink')}</b></Link></p>
              </Form>
            </Col>
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <img className="onboardBanner" src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" alt={t('auth.forgot')} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgetPassword
