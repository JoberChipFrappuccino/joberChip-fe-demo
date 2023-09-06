import type { Section, Space } from '@/models/space'
import SwithBlock from './SwithBlock'
import { Responsive, WidthProvider, Layout } from 'react-grid-layout'
import { useState } from 'react'
const ResponsiveGridLayout = WidthProvider(Responsive)

type Props = {
  title: string
  section: Section
  space: Space
}

export const SpaceSection = ({ title, section }: Props) => {
  const layout = getEditableBlockLayout(section.blocks)
  const [state, setState] = useState({
    breakpoints: 'lg',
    layouts: { lg: layout } // , md: layout, sm: layout, xs: layout, xxs: layout
  })

  return (
    <div className="prose mx-auto">
      <h1 className="text-3xl">{title}</h1>
      <ResponsiveGridLayout
        layouts={state.layouts}
        breakpoints={{
          lg: 1200
        }}
        cols={{ lg: 4 }}
        rowHeight={100}
        width={1000}
        onLayoutChange={(layout, layouts) => {
          setState({ layouts: { lg: layout }, breakpoints: 'lg' })
        }}
      >
        {section.blocks.map((block) => {
          return (
            <div key={block.block_id}>
              <SwithBlock type={block.type} block={block}></SwithBlock>
            </div>
          )
        })}
      </ResponsiveGridLayout>
    </div>
  )
}

function getEditableBlockLayout(blocks: Section['blocks']): Layout[] {
  return blocks.map((block) => {
    const { block_id, ...rest } = block
    return {
      i: block_id, // * 라이브러리에서 필요한 값
      isDraggable: true,
      isResizable: true,
      // MaxH: 2,
      // MaxW: 2,
      ...rest
    }
  })
}
