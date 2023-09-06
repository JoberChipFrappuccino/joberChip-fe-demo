import { BlockWith } from '@/models/space'

type Props = {
  block: BlockWith<'image'>
}
export function ImageBlock({ block }: Props) {
  return (
    <>
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0 }}
        src={
          'https://storage.googleapis.com/creatorspace-public/users%2Fcllyngz49054ro90116idmdmc%2FdRA0QKVsqIABsbv3-dance.gif'
        }
        alt={block.alt}
      />
    </>
  )
}
