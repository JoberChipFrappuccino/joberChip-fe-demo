import type { BlockBase, BlockType, BlockWith } from '@/models/space'
import TextBlock from '@/components/Blocks/TextBlock'
import LinkBlock from '@/components/Blocks/LinkBlock'
import SpaceBlock from '@/components/Blocks/SpaceBlock'
import ImageBlock from '@/components/Blocks/ImageBlock'
import { EmbedBlock } from '@/components/Blocks/EmbedBlock'

type Props = {
  type: BlockType
  block: BlockBase
}

export default function SwithBlock({ type, block }: Props) {
  let blockComponent = <></>
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
  }

  return <>{blockComponent}</>
}
