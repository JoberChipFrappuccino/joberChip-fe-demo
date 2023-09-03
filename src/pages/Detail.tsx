import { useState } from 'react'
import { Helmet } from 'react-helmet'
import SSRPost from '@/components/SSRPost'
import useServerSideProps from '@/hooks/serverSideProps'
import { SEO } from '@/constants'

type PageSource = {
  title: {
    [key: string]: string
  }
}
export default function Detail() {
  const [count, setCount] = useState(0)
  const pageSource: PageSource = useServerSideProps(SEO)

  return (
    <>
      <Helmet>
        <title>{pageSource['title']['/detail']}</title>
      </Helmet>
      <div className='flex'>
        <h1>Detail Page</h1>
        <h1 className='text-sky-900'>Count : {count}</h1>
        <div>
          <button className='mr-4' onClick={() => setCount((prev) => ++prev)}>
            Increment
          </button>
          <button className='mr-4' onClick={() => setCount((prev) => --prev)}>
            Decrement
          </button>
        </div>
      </div>
      <section>
        <h1 className='text-3xl'>Server Side Rendering!</h1>
        <SSRPost />
      </section>
    </>
  )
}
