import { SpaceSection } from './SpaceSection'

import type { BlockBase, Space } from '@/models/space'

import type { BlockType, Section } from '@/models/space'
import SwithBlock from './SwithBlock'
import { Responsive, WidthProvider, Layout } from 'react-grid-layout'
import { useState } from 'react'
const ResponsiveGridLayout = WidthProvider(Responsive)

type Props = {
  space: Space
}

export const SpaceViewer = ({ space }: Props) => {
  const blocks = getBlocks(space)
  const [state, setState] = useState({
    breakpoints: 'lg',
    layouts: { lg: blocks as unknown as Layout[] } // 타입을 맞추기 위해서 어쩔 수 없었.. 흑 ㅠㅠ
  })

  return (
    <div className="prose mx-auto">
      <h1>Space 로드 됨</h1>
      <ResponsiveGridLayout
        layouts={state.layouts}
        breakpoints={{
          lg: 1200
        }}
        cols={{ lg: 4 }}
        rowHeight={100}
        width={1000}
        margin={[30, 30]}
      >
        {blocks.map((block) => {
          return (
            <div
              data-section={block.type === 'section' ? 'section' : ''}
              data-block={block.block_id}
              key={block.block_id}
            >
              <SwithBlock type={block.type} block={block}></SwithBlock>
            </div>
          )
        })}
      </ResponsiveGridLayout>
    </div>
  )
}

function getBlocks(space: Space): BlockBase[] {
  const newBlocks: BlockBase[] = []
  Object.entries(space).forEach(([key, value], i) => {
    newBlocks.push({
      i: key,
      block_id: key,
      isDraggable: false,
      isResizable: false,
      static: i === 0 ? true : false, // 0번째만 고정!
      // isBounded: true,
      ...space[key]
    })

    newBlocks.push(...getEditableBlockLayout(value.blocks))
  })
  return newBlocks
}

function getEditableBlockLayout(blocks: Section['blocks']): BlockBase[] {
  return blocks.map((block) => {
    const { block_id, ...rest } = block
    return {
      i: block_id,
      block_id,
      isDraggable: true,
      isResizable: false,
      ...rest
    }
  })
}
