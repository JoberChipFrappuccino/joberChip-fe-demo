import type { Space } from '@/models/space'
import type { BlockType } from '@/models/space'
import SwithBlock from './SwithBlock'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { useEffect, useState } from 'react'
import Layout from '../Layouts/Layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

type Props = {
  space: Space
}
export const SpaceViewer = ({ space }: Props) => {
  const [rowHeight, setRowHeight] = useState(100)
  const [mode, setMode] = useState<SpaceMode>('view')
  const [blocks, setBlocks] = useState(space.blocks)
  const [state, setState] = useState({
    breakpoints: 'lg',
    layouts: { lg: getBlockLayout(space.blocks, mode) } // , md: layout, sm: layout, xs: layout, xxs: layout
  })

  useEffect(() => {
    const nextLayout = getBlockLayout(blocks, mode)
    setState(() => ({ breakpoints: 'lg', layouts: { lg: nextLayout } }))
  }, [mode])

  return (
    <>
      <h1 className="text-3xl">{space.title}</h1>
      <p className="text-xl text-slate-500">{space.description}</p>
      <button onClick={() => setMode(mode === 'view' ? 'edit' : 'view')}>
        {mode === 'view' ? '수정 하기' : '공유 화면 보기'}
      </button>
      <span className="text-rose-500">{'<== 이거 누르면 수정 또는 공유 화면 보기 토글 됩니당'}</span>
      <div className="max-w-[750px] mx-auto">
        <ResponsiveGridLayout
          layouts={state.layouts}
          breakpoints={{
            lg: 1200
          }}
          cols={{ lg: 4 }}
          rowHeight={rowHeight}
          width={1000}
          margin={[30, 30]}
          onWidthChange={(width, margin, cols) => {
            setRowHeight((width * 0.7) / cols)
          }}
          // onLayoutChange={(layout, layouts) => {
          //   console.log(layout, layouts)
          // }}
        >
          {blocks.map((block) => {
            return (
              <div className="bg-gray-300" key={block.block_id}>
                <SwithBlock mode={mode} type={block.type} block={block}></SwithBlock>
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

function getBlockLayout(blocks: Space['blocks'], mode: SpaceMode): BlockItem[] {
  return blocks.map((block) => {
    const { block_id, start_col, start_row, end_col, end_row, ...rest } = block
    return {
      rest,
      i: block_id,
      isDraggable: mode === 'view' ? false : true,
      isResizable: mode === 'view' ? false : true,
      static: mode === 'view' ? true : false,
      minW: 1,
      maxW: 2,
      minH: 1,
      maxH: 2,
      x: start_col,
      y: start_row,
      w: end_col - start_col + 1,
      h: end_row - start_row + 1
    }
  })
}
