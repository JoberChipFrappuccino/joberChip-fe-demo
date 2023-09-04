import { BlockWith } from '@/models/space'

type Props = {
  block: BlockWith<'text'>
}
export default function TextBlock({ block }: Props) {
  return <div>{block.text}</div>
}
