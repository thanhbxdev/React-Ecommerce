import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryAPI from '../../../../callApi/categoryAPI'

// eslint-disable-next-line react/prop-types
function TableCategoryComponent() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState([false])
  useEffect(() => {
    const getCategory = async () => {
      try {
        setLoading(true)
        const { data } = await CategoryAPI.getAll()
        setCategories(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getCategory()
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
  const onHandleRemove = (id) => {
    removeCate(id)
  }
  const getID = (id) => {
    return `/admin/category/edit/${id}`
  }
  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/prop-types */}
          {categories.map((category, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{category.name}</td>
              <td>
                <Link to={getID(category._id)} className="btn btn-info">
                  <i className="far fa-edit"></i>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onHandleRemove(category._id)}
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
export default TableCategoryComponent
