import { BlockWith } from '@/models/space'

type Props = {
  block: BlockWith<'text'>
}
export function TextBlock({ block }: Props) {
  return <div>{block.text}</div>
}
