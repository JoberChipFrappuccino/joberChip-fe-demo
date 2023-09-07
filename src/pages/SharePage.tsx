import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import useServerSideProps from '@/hooks/serverSideProps'
import { SEO } from '@/constants'
import { useUserStore } from '@/store/user'
import { useSpaceStore } from '@/store/space'
import { SpaceViewer } from '@/components/Space/SpaceViewer'

type PageSource = {
  title: {
    [key: string]: string
  }
}

export default function SharePage() {
  const pageSource: PageSource = useServerSideProps(SEO)
  const { user, isSignedIn } = useUserStore()
  const { space, loadSpace, isLoaded } = useSpaceStore()

  useEffect(() => {
    if (!user.user_id) return
    loadSpace(user.user_id)
  }, [isSignedIn])

  return (
    <>
      <Helmet>
        <title>{pageSource['title']['/']}</title>
      </Helmet>
      <div className="flex">
        <h1 className="title">Home Page</h1>
      </div>
      <section>{isLoaded && isSignedIn && <SpaceViewer space={space} />}</section>
    </>
  )
}
