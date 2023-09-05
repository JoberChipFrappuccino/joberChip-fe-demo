import type { BlockBase, BlockType, BlockWith } from '@/models/space'
import TextBlock from '@/components/Blocks/TextBlock'
import LinkBlock from '@/components/Blocks/LinkBlock'
import SpaceBlock from '@/components/Blocks/SpaceBlock'
import ImageBlock from '@/components/Blocks/ImageBlock'
import { EmbedBlock } from '@/components/Blocks/EmbedBlock'
import VideoBlock from '../Blocks/VideoBlock'
import GoogleMapBlock from '../Blocks/GoogleMapBlock'

type Props = {
  type: BlockType
  block: BlockBase
}

export default function SwithBlock({ type, block }: Props) {
  let blockComponent = <>지정된 블록이 없습니다!</>
  switch (type) {
    case 'text':
      blockComponent = <TextBlock block={block as BlockWith<'text'>} />
      break
    case 'image':
      blockComponent = <ImageBlock block={block as BlockWith<'image'>} />
      break
    case 'link':
      blockComponent = <LinkBlock block={block as BlockWith<'link'>} />
      break
    case 'space':
      blockComponent = <SpaceBlock block={block as BlockWith<'space'>} />
      break
    case 'embed':
      blockComponent = <EmbedBlock block={block as BlockWith<'embed'>} />
      break
    case 'video':
      blockComponent = <VideoBlock block={block as BlockWith<'video'>} />
      break
    case 'googleMap':
      blockComponent = <GoogleMapBlock block={block as BlockWith<'googleMap'>} />
  }

  return <>{blockComponent}</>
}
