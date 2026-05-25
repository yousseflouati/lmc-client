// src/services/productService.js
const BASE = import.meta.env.VITE_API_URL

// Get all products, optionally filtered by category
export const getProducts = async (category = null) => {
  const url = category
    ? `${BASE}/api/products?category=${category}`
    : `${BASE}/api/products`

  console.log('Fetching URL:', url)
  const response = await fetch(url)
  return response.json()
}

// Get one product by id
export const getProductById = async (id) => {
  const response = await fetch(`${BASE}/api/products/${id}`)

  if (!response.ok) {
    throw new Error('Product not found')
  }

  return response.json()
}