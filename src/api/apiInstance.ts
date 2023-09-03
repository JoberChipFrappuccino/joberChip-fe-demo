import { ACCESS_TOKEN } from '@/constants'
import axios from 'axios'
import { errorController } from './controller/error'

const authAPI = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

authAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN) ? localStorage.getItem(ACCESS_TOKEN) : ''
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    config.headers['Authorization'] = token
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

authAPI.interceptors.response.use(
  ({ data }) => data,
  (error) => errorController(error)
)

export { authAPI }
