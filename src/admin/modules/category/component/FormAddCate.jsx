import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CategoryAPI from '../../../../callApi/categoryAPI'

function FormAddCate() {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data, e) => {
    console.log(data)
    try {
      const uploads = new FormData()
      uploads.append('name', data.name)
      await CategoryAPI.addCategory(uploads)
      history.push('/admin/category/list')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="content-header">
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              type="text"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <small id="emailHelp" className="form-text  text-danger">
                Name Required
              </small>
            )}
          </div>
          <div className="py-3">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            <Link to="/admin/category/list" className="btn btn-danger mx-2">
              <span>Cancel</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormAddCate
