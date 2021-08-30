import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarShopComponent from '../components/SidebarShop.component'
import ProductAPI from '../../../callApi/productApi'
import CategoryAPI from '../../../callApi/categoryAPI'
import ShopContentComponent from '../components/ShopContent.component'

function ProductListPage(callback, deps) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [cateSelected, setCateSelected] = useState(null)

  const loadCate = useCallback(() => {
    CategoryAPI.getAll().then(({ data }) => {
      if (data && data.length > 0) {
        setCategories(data)
      } else {
        setCategories([])
      }
    })
  }, [])

  const loadProduct = useCallback(() => {
    let params = {}
    if (cateSelected) {
      params = { ...params, categoryId: cateSelected }
    }
    ProductAPI.getAll(params).then(({ data }) => {
      if (data && data.length > 0) {
        setProducts(data)
      } else {
        setProducts([])
      }
    })
  }, [cateSelected])

  useEffect(() => {
    loadProduct()
    loadCate()
  }, [cateSelected])
  return (
    <div>
      <div className="breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="separator">/</span> Shop
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-page-wraper container">
        <div className="container">
          <div className="row">
            <SidebarShopComponent
              onSelect={setCateSelected}
              categories={categories}
            />
            <ShopContentComponent products={products} categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage
