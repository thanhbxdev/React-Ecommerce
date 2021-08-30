import { axiosClient } from './axiosClient'

const ProductAPI = {
  getAll(params) {
    const url = 'api/products'
    return axiosClient.get(url, { params })
  },
  get(id) {
    const url = `api/product/${id}`
    return axiosClient.get(url)
  },
  async addProduct(product) {
    const url = '/api/products/create'
    return axiosClient.post(url, product)
  },
  removeProduct(id) {
    const url = `api/product/${id}`
    return axiosClient.delete(url)
  },
  updateProduct(id, data) {
    const url = `api/product/${id}`
    return axiosClient.put(url, data)
  }
}
export default ProductAPI
