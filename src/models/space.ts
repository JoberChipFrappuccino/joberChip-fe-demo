import { Layout } from 'react-grid-layout'

export type Space = {
  [key: string]: Section
}

export type Section = {
  section_id: string
  layout: {
    styles: {
      [key: string]: string
    }
  }
  type: 'section'
  y: number
  x: number
  h: number
  w: number
  blocks: BlockBase[]
}

export type BlockType = 'text' | 'image' | 'link' | 'space' | 'embed' | 'video' | 'googleMap' | 'section'

export type BlockBase = {
  block_id: string
  type: BlockType
  y: number
  x: number
  h: number
  w: number
  i?: string
  MaxH?: number
  MaxW?: number
  isDraggable?: boolean
  isResizable?: boolean
  isBounded?: boolean
  static?: boolean
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
export type EmbedGoogleMapBlock = {
  src: string
  caption: string
}

export type SectionBlock = {
  section_id: string
  layout: {
    styles: {
      [key: string]: string
    }
  }
  text: string
}

// * 2023/09/04 추가 (embed, video 테스트)
// https://www.youtube.com/watch?v=75kySTFaBQQ&t=6607s
export type EmbedBlock = {
  src: string
  caption: string
}
export type VideoBlock = {
  src: string
  caption: string
}

// * example 이런 식으로 확장 해야 함
export type EmbedYoutubeBlock = {} // * youtube
export type EmbedSpotifyBlock = {} // * spotify
export type EmbedGithubBlock = {} // * github
// export type EmbedGoogleMapBlock = {} // * google map
export type EmbedKakaomapBlock = {} // * kakaomap

/**
 * @description conponents/Blocks/* 에 있는 컴포넌트들의 props 타입을 정의합니다.
 * @description components/Space/SwithBlock.tsx에서 BlockWith<type>을 swith해서 사용합니다.
 */
export type BlockWith<T> = T extends 'text'
  ? TextBlock & BlockBase
  : T extends 'image'
  ? ImageBlock & BlockBase
  : T extends 'link'
  ? LinkBlock & BlockBase
  : T extends 'space'
  ? SpaceBlock & BlockBase
  : T extends 'embed'
  ? EmbedBlock & BlockBase
  : T extends 'video'
  ? VideoBlock & BlockBase
  : T extends 'googleMap'
  ? EmbedGoogleMapBlock & BlockBase
  : T extends 'section'
  ? SectionBlock & BlockBase
  : never
