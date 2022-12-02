import { tabNewsApi } from '../../configs/global/axios'

export async function newsContents() {
  const { data } = await tabNewsApi.get('/contents')

  return data
}

export async function newContent<T>(path: string): Promise<T> {
  const { data } = await tabNewsApi.get(`contents${path}`)

  return data
}
