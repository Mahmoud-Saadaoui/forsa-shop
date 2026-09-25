import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LoginImg from '../../assets/images/login.webp'

function UserLogin() {
  const { t } = useTranslation()

  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <Form className="onboardForm">
                <h4 className="section-title-login">{t('auth.loginTitle')}</h4>
                <input id="login-email" name="email" autoComplete="email" className="form-control m-2" type="email" placeholder={t('auth.email')} aria-label={t('auth.email')} />
                <input id="login-password" name="password" autoComplete="current-password" className="form-control m-2" type="password" placeholder={t('auth.password')} aria-label={t('auth.password')} />
                <Button type="submit" className="btn btn-block m-2 site-btn-login">{t('auth.login')}</Button>
                <hr />
                <p><b>{t('auth.forgot')}</b> <Link to="/forget_password"><b>{t('auth.forgotLink')}</b></Link></p>
                <p><b>{t('auth.newUser')}</b> <Link to="/register"><b>{t('auth.registerLink')}</b></Link></p>
              </Form>
            </Col>
            <Col className="d-flex justify-content-center" md={6} sm={12}>
              <img className="onboardBanner" src={LoginImg} alt={t('auth.loginTitle')} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default UserLogin
