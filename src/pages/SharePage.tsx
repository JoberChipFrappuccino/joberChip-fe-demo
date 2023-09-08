import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import useServerSideProps from '@/hooks/serverSideProps'
import { SEO } from '@/constants'
import { useUserStore } from '@/store/user'
import { useSpaceStore } from '@/store/space'
import { SpaceViewer } from '@/components/Space/SpaceViewer'
import { Drawer } from '@/components/Drawer'
import { Button } from 'antd'
import { useSpaceModeStore } from '@/store/spaceMode'
import SpaceActionBar from '@/components/Space/SpaceActionBar'

type PageSource = {
  title: {
    [key: string]: string
  }
}

export default function SharePage() {
  const pageSource: PageSource = useServerSideProps(SEO)
  const { user, isSignedIn } = useUserStore()
  const { loadSpace, isLoaded } = useSpaceStore()
  const { mode, setSpaceMode } = useSpaceModeStore()

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
      <Button className="prose" onClick={() => setSpaceMode(mode === 'view' ? 'edit' : 'view')}>
        {mode === 'view' ? '수정 하기' : '공유 화면 보기'}
      </Button>
      <aside>{isLoaded && isSignedIn && <Drawer />}</aside>
      <p>위 버튼들 눌러서 테스트해주세요.</p>
      <p>
        768px 이하에서는 resize 버튼 모두 활성화 (모바일이라고 가정, 원래는 서버에서 접속 로그로 모바일 | 데스크탑
        구분해야함)
      </p>
      <p>768px이상일 경우 mouse가 hover 되면 resize 버튼 활성화</p>
      <div className="flex w-full h-full">
        {/* <div>Navigation Position</div> */}
        <div className="relative flex-1 w-full">
          <section>{isLoaded && isSignedIn && <SpaceViewer />}</section>
        </div>
      </div>
      <SpaceActionBar />
    </>
  )
}
