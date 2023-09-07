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
    if (!isLoaded) {
      loadSpace(user.user_id)
    }
  }, [isLoaded, isSignedIn])

  return (
    <>
      <Helmet>
        <title>{pageSource['title']['/']}</title>
      </Helmet>
      <div className="flex">
        <h1 className="title">Home Page</h1>
      </div>
      <section>{isLoaded && <SpaceViewer space={space} />}</section>
      <section>
        {isLoaded && (
          <div>
            <h1>동영상 추가 태스트 섹션</h1>
            <p>1. drop zone 컴포넌트를 생성, 사용자가 비디오를 drop (input으로 비디오를 받을 수도 있음)</p>
            <p>2. content-type : multipart/form-data로 video 파일을 전송</p>
            <p>3. 전송이 완료 될 때 까지 로딩표시 시간이 남으면 progress bar로 교체 (시간 안남겠지!)</p>
          </div>
        )}
      </section>
    </>
  )
}
