import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductListPage from './pages/ProductList.page'
import MasterLayout from '../../layout/Master.layout'
import ProductDetailPage from './pages/ProductDetail.page'

export const ProductRoutesPath = {
  root: '/product',
  detail: '/product/:id/detail',
  list: '/product/list',
  toDetail: (id) => `/product/${id}/detail`
}

function ProductRoutes(props) {
  return (
    <MasterLayout>
      <Switch>
        <Route path={ProductRoutesPath.list} exact>
          <ProductListPage {...props} />
        </Route>
        <Route path={ProductRoutesPath.detail} exact>
          <ProductDetailPage {...props} />
        </Route>
      </Switch>
    </MasterLayout>
  )
}

export default ProductRoutes
