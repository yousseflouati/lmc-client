// src/services/categoryService.js
const BASE = import.meta.env.VITE_API_URL

export const getCategories = async () => {
  const response = await fetch(`${BASE}/api/categories`)

  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }

  return response.json()
}