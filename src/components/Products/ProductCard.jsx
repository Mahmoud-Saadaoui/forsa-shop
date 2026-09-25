import React from 'react'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function ProductCard({ product, imageClassName = 'center', className = 'image-box card w-100' }) {
  const { t } = useTranslation()
  const productName = t(product.nameKey)

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card-link"
      aria-label={`${productName} - ${product.price} €`}
    >
      <Card className={className}>
        <img className={imageClassName} alt={productName} src={product.image} />
        <Card.Body>
          <p className="product-name-on-card">{productName}</p>
          <p className="product-price-on-card">{product.price} €</p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ProductCard
