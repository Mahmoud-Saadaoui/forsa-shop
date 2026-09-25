import React, { useState } from 'react'
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function Notification() {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const notifications = [1, 2, 3, 4]

  return (
    <>
      <Container>
        <Row>
          {notifications.map((notification) => (
            <Col key={notification} className="p-1" md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h6>{t('notifications.title')}</h6>
                  <p className="py-1 px-0 text-primary m-0"><i className="fa fa-bell"></i> {t('notifications.date')}: 06-03-2026 | {t('notifications.status')}</p>
                  <Button className="btn btn-danger" onClick={() => setShow(true)}>{t('notifications.details')}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton><Modal.Title>{t('notifications.modalTitle')}</Modal.Title></Modal.Header>
        <Modal.Body>{t('notifications.modalText')}</Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={() => setShow(false)}>{t('notifications.close')}</Button></Modal.Footer>
      </Modal>
    </>
  )
}

export default Notification
