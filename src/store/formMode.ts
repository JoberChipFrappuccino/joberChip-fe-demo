import { BlockType } from '@/models/space'
import { create } from 'zustand'

interface FormMode {
  form: SpaceMode
  BlockType: BlockType
  setSpaceMode: (spaceMode: SpaceMode) => void
}
