import axios from 'axios'

const api = axios.create({
    baseURL: './personagens'
})

export default api