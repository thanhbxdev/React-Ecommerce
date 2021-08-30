import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CategoryAPI from '../../../../callApi/categoryAPI'

function FormEditCate() {
  const { id } = useParams()
  const history = useHistory()
  const [category, setCategory] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await CategoryAPI.get(id)
        setCategory(data)
        reset(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategory()
  }, [])

  const onSubmit = async (data) => {
    const newData = {
      ...data
    }
    console.log(newData)
    await CategoryAPI.updateCate(id, newData)
    history.push('/admin/category/list')
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
              Edit
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
export default FormEditCate
