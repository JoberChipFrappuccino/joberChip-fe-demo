import type { Space } from '@/models/space'
import type { BlockType } from '@/models/space'
import SwithBlock from './SwithBlock'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { useCallback, useState } from 'react'

const ResponsiveGridLayout = WidthProvider(Responsive)

type Props = {
  space: Space
}
export const SpaceViewer = ({ space }: Props) => {
  const layout = getEditableBlockLayout(space.blocks)
  const [rowHeight, setRowHeight] = useState(100)
  const [state, setState] = useState({
    breakpoints: 'lg',
    layouts: { lg: layout } // , md: layout, sm: layout, xs: layout, xxs: layout
  })

  return (
    <>
      <h1>Space 로드 됨</h1>
      <h1 className="text-3xl">{space.title}</h1>
      <p className="text-xl text-slate-500">{space.description}</p>
      <div className="max-w-[1000px] mx-auto">
        <ResponsiveGridLayout
          layouts={state.layouts}
          breakpoints={{
            lg: 1200
          }}
          cols={{ lg: 4 }}
          rowHeight={rowHeight}
          width={1000}
          onWidthChange={(width, margin, cols) => {
            setRowHeight((width * 0.7) / cols)
          }}
        >
          {space.blocks.map((block) => {
            return (
              <div className="bg-slate-300" key={block.block_id}>
                <SwithBlock type={block.type} block={block}></SwithBlock>
              </div>
            )
          })}
        </ResponsiveGridLayout>
      </div>
    </>
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

function getEditableBlockLayout(blocks: Space['blocks']): BlockItem[] {
  return blocks.map((block) => {
    const { block_id, start_col, start_row, end_col, end_row, ...rest } = block
    return {
      rest,
      i: block_id,
      isDraggable: true,
      isResizable: true,
      MaxH: 2,
      MaxW: 2,
      x: start_col,
      y: start_row,
      w: end_col - start_col + 1,
      h: end_row - start_row + 1
    }
  })
}
