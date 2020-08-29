import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    authorization: process.env.API_ACCESS_TOKEN
  },
  params: {
    api_key: process.env.API_KEY,
    language: 'pt-br'
  }
})

export default api
