import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import type { BlockType, Section } from '@/models/space'
import SwithBlock from './SwithBlock'

type Props = {
  title: string
  section: Section
}
export const SpaceSection = ({ title, section }: Props) => {
  const layout = getEditableBlockLayout(section.blocks)

  return (
    <div className="prose">
      <h1 className="text-3xl">{title}</h1>
      <GridLayout layout={layout} maxRows={10} cols={4} compactType={'vertical'} rowHeight={100} width={500}>
        {section.blocks.map((block) => {
          return (
            <div className="bg-slate-300" key={block.block_id}>
              <SwithBlock type={block.type} block={block}></SwithBlock>
            </div>
          )
        })}
      </GridLayout>
    </div>
  )
}

type BlockItem = {
  i: string
  x: number
  y: number
  w: number
  h: number
  type?: BlockType
  MaxH?: number
  MaxW?: number
  isDraggable?: boolean
  isResizable?: boolean
}

function getEditableBlockLayout(blocks: Section['blocks']): BlockItem[] {
  return blocks.map((block) => {
    const { block_id, start_col, start_row, end_col, end_row, ...rest } = block
    return {
      rest,
      i: block_id,
      isDraggable: true,
      isResizable: true,
      MaxH: 2,
      MaxW: 2,
      x: start_row,
      y: start_col,
      w: end_row - start_row + 1,
      h: end_col - start_col + 1
    }
  })
}
