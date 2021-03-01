import axios from 'axios'

const api = axios.create({
    baseURL: './personagens.json'
})

export default api