import type { BlockBase, BlockType, BlockWith } from '@/models/space'
import TextBlock from '@/components/Blocks/TextBlock'
import LinkBlock from '@/components/Blocks/LinkBlock'
import SpaceBlock from '@/components/Blocks/SpaceBlock'
import ImageBlock from '@/components/Blocks/ImageBlock'
import { EmbedBlock } from '@/components/Blocks/EmbedBlock'
import VideoBlock from '@/components/Blocks/VideoBlock'
import GoogleMapBlock from '@/components/Blocks/GoogleMapBlock'

type Props = {
  type: BlockType
  block: BlockBase
  mode: SpaceMode
}

export default function SwithBlock({ type, block, mode }: Props) {
  let blockComponent = <>지정된 블록이 없습니다!</>
  switch (type) {
    case 'text':
      blockComponent = <TextBlock mode={mode} block={block as BlockWith<'text'>} />
      break
    case 'image':
      blockComponent = <ImageBlock mode={mode} block={block as BlockWith<'image'>} />
      break
    case 'link':
      blockComponent = <LinkBlock mode={mode} block={block as BlockWith<'link'>} />
      break
    case 'space':
      blockComponent = <SpaceBlock mode={mode} block={block as BlockWith<'space'>} />
      break
    case 'embed':
      blockComponent = <EmbedBlock mode={mode} block={block as BlockWith<'embed'>} />
      break
    case 'video':
      blockComponent = <VideoBlock mode={mode} block={block as BlockWith<'video'>} />
      break
    case 'googleMap':
      blockComponent = <GoogleMapBlock mode={mode} block={block as BlockWith<'googleMap'>} />
  }

  return <>{blockComponent}</>
}
