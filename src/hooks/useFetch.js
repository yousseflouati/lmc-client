// src/hooks/useFetch.js
import { useState, useEffect } from 'react'

export default function useFetch(fetchFn, deps = []) {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let cancelled = false  // prevents state update if component unmounts

    setLoading(true)
    setError(null)

    fetchFn()
      .then(result => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true  // cleanup function
    }
  }, deps)

  return { data, loading, error }
}