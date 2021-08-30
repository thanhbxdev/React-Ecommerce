import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import HomePage from '../modules/home/Home.page'
import ProductRoutes, {
  ProductRoutesPath
} from '../modules/product/Product.routes'
import DashboardPageAdmin from '../admin/modules/dashboard/Dashboard.page.admin'
import ProductsPageAdmin from '../admin/modules/products/Products.page.admin'
import BlogPage from '../modules/Blog/Blog.page'
import LoginPage from '../modules/Auth/Login/Login.page'
import RegisterPage from '../modules/Auth/Register/Register.page'
import ProductAddPageAdmin from '../admin/modules/products/ProductAdd.page.admin'
import Logout from '../modules/Auth/Logout/logout'
import CategoryPageAdmin from '../admin/modules/category/Category.page.admin'
import CategoryAddPage from '../admin/modules/category/CategoryAddPage'
import ProductUpdatePageAdmin from '../admin/modules/products/ProductUpdate.page.admin'
import CategoryEditPage from '../admin/modules/category/CategoryEditPage'

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage {...props} />
        </Route>
        <Route path={ProductRoutesPath.root}>
          <ProductRoutes {...props} />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/logout" exact component={Logout} />
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route exact path="/admin">
          <Redirect to="/admin/dashboard" />
        </Route>
        <Route path="/admin/dashboard" exact>
          <DashboardPageAdmin {...props} />
        </Route>
        <Route path="/admin/product/list" exact>
          <ProductsPageAdmin {...props} />
        </Route>
        <Route path="/admin/product/add" exact>
          <ProductAddPageAdmin {...props} />
        </Route>
        <Route path="/admin/product/edit/:id" exact>
          <ProductUpdatePageAdmin {...props} />
        </Route>
        <Route path="/admin/category/list" exact>
          <CategoryPageAdmin {...props} />
        </Route>
        <Route path="/admin/category/add" exact>
          <CategoryAddPage {...props} />
        </Route>
        <Route path="/admin/category/edit/:id" exact>
          <CategoryEditPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
