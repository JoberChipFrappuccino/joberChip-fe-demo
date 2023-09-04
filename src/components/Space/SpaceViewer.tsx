import type { Space } from '@/models/space'
import { SpaceSection } from './SpaceSection'

type Props = {
  space: Space
}
export const SpaceViewer = ({ space }: Props) => {
  return (
    <div>
      <h1>Space 로드 됨</h1>
      {Object.entries(space).map(([key, value]) => {
        return <SpaceSection key={key} section={value} />
      })}
    </div>
  )
}
