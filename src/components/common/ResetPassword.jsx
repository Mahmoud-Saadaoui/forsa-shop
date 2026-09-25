import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function ResetPassword() {
  const { t } = useTranslation()

  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <Form className="onboardForm">
                <h4 className="section-title-login">{t('auth.resetTitle')}</h4>
                <input id="reset-code" name="code" autoComplete="one-time-code" className="form-control m-2" type="text" placeholder={t('auth.pincode')} aria-label={t('auth.pincode')} />
                <input id="reset-email" name="email" autoComplete="email" className="form-control m-2" type="email" placeholder={t('auth.email')} aria-label={t('auth.email')} />
                <input id="reset-password" name="password" autoComplete="new-password" className="form-control m-2" type="password" placeholder={t('auth.newPassword')} aria-label={t('auth.newPassword')} />
                <input id="reset-confirm-password" name="confirmPassword" autoComplete="new-password" className="form-control m-2" type="password" placeholder={t('auth.confirmPassword')} aria-label={t('auth.confirmPassword')} />
                <Button type="submit" className="btn btn-block m-2 site-btn-login">{t('auth.resetTitle')}</Button>
              </Form>
            </Col>
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <img className="onboardBanner" alt={t('auth.resetTitle')} src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword
