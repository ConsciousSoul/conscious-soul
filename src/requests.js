import axios from 'axios'

const API_URL = "https://conscious-soul-api-dev.herokuapp.com"

export const fetchData = (endpoint) => {
  return axios.get(`${API_URL}${endpoint}`) 
}
