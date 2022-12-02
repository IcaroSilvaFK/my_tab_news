export interface INewsContent {
  created_at: string
  id: string
  owner_username: string
  owner_id: string
  published_at: string
  title: string
  status: string
  slug: string
}

export interface INewsOneContent{
  children_deep_count: number;
  created_at: string
  owner_id: string
  owner_username:string
  published_at: string
  published_at: string
  status: string
  title: string
  body: string
  updated_at: string
}
