import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LoginImg from '../../assets/images/login.webp'

function Register() {
  const { t } = useTranslation()

  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <Form className="onboardForm">
                <h4 className="section-title-login">{t('auth.registerTitle')}</h4>
                <input id="register-name" name="name" autoComplete="name" className="form-control m-2" type="text" placeholder={t('auth.name')} aria-label={t('auth.name')} />
                <input id="register-email" name="email" autoComplete="email" className="form-control m-2" type="email" placeholder={t('auth.email')} aria-label={t('auth.email')} />
                <input id="register-password" name="password" autoComplete="new-password" className="form-control m-2" type="password" placeholder={t('auth.password')} aria-label={t('auth.password')} />
                <input id="register-confirm-password" name="confirmPassword" autoComplete="new-password" className="form-control m-2" type="password" placeholder={t('auth.confirmPassword')} aria-label={t('auth.confirmPassword')} />
                <Button type="submit" className="btn btn-block m-2 site-btn-login">{t('auth.register')}</Button>
                <hr />
                <p><b>{t('auth.forgot')}</b> <Link to="/forget_password"><b>{t('auth.forgotLink')}</b></Link></p>
                <p><b>{t('auth.alreadyUser')}</b> <Link to="/login"><b>{t('auth.login')}</b></Link></p>
              </Form>
            </Col>
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <img alt={t('auth.registerTitle')} className="onboardBanner" src={LoginImg} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
