import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const page: NextPage = () => {
  const { asPath, pathname } = useRouter()

  return (
    <div>
      <h1>cacas</h1>
    </div>
  )
}

export default page
