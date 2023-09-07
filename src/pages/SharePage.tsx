import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import useServerSideProps from '@/hooks/serverSideProps'
import { SEO } from '@/constants'
import { useUserStore } from '@/store/user'
import { useSpaceStore } from '@/store/space'
import { SpaceViewer } from '@/components/Space/SpaceViewer'
import { ActionBar } from '@/components/ActionBar'
import { DrawTest } from '@/components/DrawTest'
import { Button } from 'antd'

type PageSource = {
  title: {
    [key: string]: string
  }
}

export default function SharePage() {
  const pageSource: PageSource = useServerSideProps(SEO)
  const { user, isSignedIn } = useUserStore()
  const { space, loadSpace, isLoaded } = useSpaceStore()

  // * test
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

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
      <Button onClick={showDrawer}></Button>
      <section>{isLoaded && isSignedIn && <ActionBar />}</section>
      <div className="flex w-full h-full">
        <div className="border-4 border-black">
          <div>
            <h1 className="text-3xl">NAVIGATION</h1>
          </div>
          <ul>
            <li>스페이스1</li>

            <li>스페이스1</li>

            <li>스페이스1</li>

            <li>스페이스1</li>

            <li>스페이스1</li>

            <li>스페이스1</li>
          </ul>
        </div>
        <div className="relative flex-1 w-full">
          <section>{isLoaded && isSignedIn && <SpaceViewer space={space} />}</section>
        </div>
        <DrawTest open={open} onClose={onClose} />
      </div>
    </>
  )
}
