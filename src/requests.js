import axios from 'axios'
export const fetchData = (endpoint) => {
  return axios.get(`${process.env.API_URL}${endpoint}`) 
}
