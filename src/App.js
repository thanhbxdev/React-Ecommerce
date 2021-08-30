import './App.css'
import Routes from './router/Routes'
import React, { useEffect, useState } from 'react'
import ProductAPI from './callApi/productApi'
import CategoryAPI from './callApi/categoryAPI'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // didMount
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: products } = await ProductAPI.getAll()
        const { data: categories } = await CategoryAPI.getAll()
        setProducts(products)
        setCategories(categories)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  const removeCate = async (id) => {
    try {
      await CategoryAPI.removeCategory(id)
      const newCate = categories.filter((category) => category._id !== id)
      setCategories(newCate)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Routes
      products={products}
      categories={categories}
      loading={loading}
      removeCate={removeCate}
    />
  )
}

export default App
