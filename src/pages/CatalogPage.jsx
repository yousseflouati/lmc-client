// src/pages/CatalogPage.jsx

import { getProducts } from '../services/productService'
import { useMemo } from 'react'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

export default function CatalogPage() {
  const [searchParams]          = useSearchParams()
  const category                = searchParams.get('category')
  const fetchFn = useMemo(
    () => () => getProducts(category),
    [category]
  )
  const { data: products, loading, error } = useFetch(fetchFn, [category])

  if (loading) return <div style={{ padding: '2rem 4rem' }}>Chargement...</div>
  if (error)   return <div style={{ padding: '2rem 4rem' }}>Erreur : {error}</div>


  // ── Success state ──────────────────────────────────
   return (
    <div style={{ padding: '2rem 4rem' }}>
      <h1>{category ? `Catégorie : ${category}` : 'Tous les produits'}</h1>
      <p>{products?.length} produit(s) trouvé(s)</p>

      <div>
        {products?.map(product => (
          <div key={product.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #333' }}>
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.price} TND</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}