export type Space = {
  [key: string]: Section
}

export type Section = {
  layout: {
    styles: {
      [key: string]: string
    }
  }
  blocks: BlockBase[]
}

export type BlockType = 'text' | 'image' | 'link' | 'space'

export type BlockBase = {
  type: BlockType
  start_row: number
  start_col: number
  end_row: number
  end_col: number
}

export type TextBlock = {
  text: string
}
export type ImageBlock = {
  src: string
  alt: string
}
export type LinkBlock = {
  url: string
  text: string
}
export type SpaceBlock = {
  text: string
  url: string
}

export type Block<T> = T extends BlockType
  ? 'text'
  : T extends TextBlock
  ? 'image'
  : T extends ImageBlock
  ? 'link'
  : T extends LinkBlock
  ? 'space'
  : T extends SpaceBlock
  ? ''
  : never
