import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../../assets/css/custom.css'
import products from '../data'

function Categories() {
  const { t } = useTranslation()
  const categories = [
    ['women', 0],
    ['men', 2],
    ['dresses', 1],
    ['tops', 3],
    ['shoes', 4],
    ['accessories', 5],
  ]

  return (
    <section className="home-section category-section">
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>{t('home.categories')}</h2>
          <p>{t('home.categoriesSubtitle')}</p>
        </div>
      </Container>
      <Row className="category-grid">
        {categories.map(([category, productIndex]) => (
          <Col key={category} lg={2} md={4} sm={6}>
            <Link to="/category" className="text-link">
              <Card className="h-100 w-100 text-center category-card">
                <Card.Body>
                  <img className="center" alt={t(`categories.${category}`)} src={products[productIndex].image} />
                  <h4 className="category-name">{t(`categories.${category}`)}</h4>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Categories
