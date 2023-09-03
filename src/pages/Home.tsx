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
export default function Home() {
  const [count, setCount] = useState(0)
  const pageSource: PageSource = useServerSideProps(SEO)
  return (
    <>
      <Helmet>
        <title>{pageSource['title']['/']}</title>
      </Helmet>
      <div className='flex'>
        <h1 className='title'>Home Page</h1>
        <h1 className='text-red-500 px-2'>Count : {count}</h1>
        <div>
          <button
            className='mr-12'
            onClick={() => {
              setCount((prev) => ++prev)
            }}
          >
            Increment
          </button>
          <button
            className='mr-12'
            onClick={() => {
              setCount((prev) => --prev)
            }}
          >
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
