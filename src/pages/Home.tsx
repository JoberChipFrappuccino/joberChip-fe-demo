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
  const pageSource: PageSource = useServerSideProps(SEO)
  return (
    <>
      <Helmet>
        <title>{pageSource['title']['/']}</title>
      </Helmet>
      <div className="flex">
        <h1 className="title">Home Page</h1>
      </div>
      <section>
        <h1 className="text-3xl">Server Side Rendering!</h1>
        <SSRPost />
      </section>
    </>
  )
}
