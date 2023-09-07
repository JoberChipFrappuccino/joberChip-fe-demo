import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import useServerSideProps from '@/hooks/serverSideProps'
import { SEO } from '@/constants'
import { useUserStore } from '@/store/user'
import { useSpaceStore } from '@/store/space'
import { SpaceViewer } from '@/components/Space/SpaceViewer'
import { Drawer } from '@/components/Drawer'
import { DrawTest } from '@/components/DrawTest'
import { Button } from 'antd'
import { useSpaceModeStore } from '@/store/spaceMode'

type PageSource = {
  title: {
    [key: string]: string
  }
}

export default function SharePage() {
  const pageSource: PageSource = useServerSideProps(SEO)
  const { user, isSignedIn } = useUserStore()
  const { space, loadSpace, isLoaded } = useSpaceStore()
  // * 스페이스 모드 상태 관리
  const { mode, setSpaceMode } = useSpaceModeStore()

  // * 테스트 코드
  const [open, setOpen] = useState(false)
  // * 테스트 코드
  const showDrawer = () => {
    setOpen(true)
  }
  // * 테스트 코드
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
      <Button className="prose" onClick={showDrawer}>
        Drawer 테스트
      </Button>
      <Button className="prose" onClick={() => setSpaceMode(mode === 'view' ? 'edit' : 'view')}>
        {mode === 'view' ? '수정 하기' : '공유 화면 보기'}
      </Button>
      <section>{isLoaded && isSignedIn && <Drawer />}</section>
      <div className="flex w-full h-full">
        {/* <div>Navigation Position</div> */}
        <div className="relative flex-1 w-full">
          <section>{isLoaded && isSignedIn && <SpaceViewer space={space} />}</section>
        </div>
        <DrawTest open={open} onClose={onClose} />
      </div>
    </>
  )
}
