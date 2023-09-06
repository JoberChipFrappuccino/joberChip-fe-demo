import { BlockWith } from '@/models/space'

type Props = {
  block: BlockWith<'link'>
}
export function LinkBlock({ block }: Props) {
  return (
    <div>
      <a href={block.url}>{block.text}</a>
    </div>
  )
}
