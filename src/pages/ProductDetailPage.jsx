// src/pages/ProductDetailPage.jsx'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import useFetch from '../hooks/useFetch'
import { getProductById } from '../services/productService'

export default function ProductDetailPage() {
  const { id } = useParams()
  const fetchFn = useMemo(
    () => () => getProductById(id),
    [id]
  )

  const { data: product, loading, error } = useFetch(fetchFn, [id])

  if (loading) return <div style={{ padding: '2rem 4rem' }}>Chargement...</div>
  if (error)   return <div style={{ padding: '2rem 4rem' }}>Erreur : {error}</div>

    return (
    <div style={{ padding: '2rem 4rem' }}>
      <h1>{product?.name}</h1>
      <p>{product?.brand}</p>
      <p>{product?.price} TND</p>
      <p>{product?.description}</p>
      <p>Catégorie : {product?.category}</p>
      <p>Stock : {product?.stock} unités</p>
    </div>
  )
}