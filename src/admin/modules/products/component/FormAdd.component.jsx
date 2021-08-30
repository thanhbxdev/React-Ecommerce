import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CategoryAPI from '../../../../callApi/categoryAPI'
import { useForm } from 'react-hook-form'
import ProductAPI from '../../../../callApi/productApi'
import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
function FormAddComponent() {
  const [categories, setCategories] = useState([])
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categories } = await CategoryAPI.getAll()
        setCategories(categories)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  const onSubmit = async (data, e) => {
    const uploads = new FormData()
    uploads.append('name', data.name)
    uploads.append('category', data.category)
    uploads.append('price', data.price)
    uploads.append('price_sale', data.price_sale)
    uploads.append('quantity', data.quantity)
    uploads.append('description', data.description)
    uploads.append('shipping', data.shipping)
    uploads.append('photo', data.photo[0])
    await ProductAPI.addProduct(uploads)
    history.push('/admin/product/list')
  }
  return (
    <div className="content-header">
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category</label>
            <select
              name="category"
              id=""
              {...register('category', { required: true })}
            >
              {categories.map((cate, index) => (
                <option value={cate._id} key={index}>
                  {cate.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <small id="emailHelp" className="form-text  text-danger">
                Category Required
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <small id="emailHelp" className="form-text  text-danger">
                Name Required
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              {...register('price', { required: true })}
            />
            {errors.price && (
              <small id="emailHelp" className="form-text  text-danger">
                Price Required
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Sale</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Sale"
              {...register('price_sale')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Quantity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Qunatity"
              {...register('quantity', { required: true })}
            />
            {errors.quantity && (
              <small id="emailHelp" className="form-text  text-danger">
                Quantity Required
              </small>
            )}
          </div>
        </div>
        {/*End col */}
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={5}
              {...register('description', { required: true })}
            />
            {errors.description && (
              <small id="emailHelp" className="form-text  text-danger">
                Description Required
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Image</label>
            <input
              type="file"
              className="form-control"
              {...register('photo')}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              {...register('shipping')}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Shipping
            </label>
          </div>
          <div className="py-3">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            <Link to="/admin/product/list" className="btn btn-danger mx-2">
              <span>Cancel</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
export default FormAddComponent
