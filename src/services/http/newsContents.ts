import { tabNewsApi } from '../../configs/global/axios'

export async function newsContents() {
  const { data } = await tabNewsApi.get('/contents')

  return data
}
