import React, { useEffect, useState } from 'react'
import ProductAPI from '../../../../callApi/productApi'
import getPhoto from '../../../../helpers/GetPhoto'
import { Link } from 'react-router-dom'
import CategoryAPI from '../../../../callApi/categoryAPI'

function TableProductComponent() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // didMount
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: categories } = await CategoryAPI.getAll()
        const { data: products } = await ProductAPI.getAll()
        setCategories(categories)
        setProducts(products)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  const removeItem = async (id) => {
    try {
      await ProductAPI.removeProduct(id)
      const newProducts = products.filter((product) => product._id !== id)
      setProducts(newProducts)
    } catch (e) {
      console.log(e)
    }
  }
  const onHandleRemove = (id) => {
    removeItem(id)
  }
  const getID = (id) => {
    return `/admin/product/edit/${id}`
  }
  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Sale</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prd, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{prd.name}</td>
              <td>
                <img
                  src={getPhoto(prd._id)}
                  alt=""
                  style={{ width: '100px' }}
                />
              </td>
              <td>
                {categories.find((cate) => cate._id === prd.category).name}
              </td>
              {/*<td>{prd.category}</td>*/}
              <td>{prd.description.slice(0, 10) + '...'}</td>
              <td>{prd.price}</td>
              <td>{prd.price_sale}</td>
              <td>{prd.quantity}</td>
              <td>
                <Link to={getID(prd._id)} className="btn btn-info">
                  <i className="far fa-edit"></i>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onHandleRemove(prd._id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading ? (
        <div className="text-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default TableProductComponent
