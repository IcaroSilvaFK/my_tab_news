import axios from 'axios'

export const tabNewsApi = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
})
export const githubApi = axios.create({
  baseURL: 'https://api.github.com/users',
})

// endpoint contents
