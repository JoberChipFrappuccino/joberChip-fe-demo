import { BlockType } from '@/models/space'
import { create } from 'zustand'

type FormType = 'template' | 'page' | 'block' | undefined
interface FormMode {
  formMode: FormType
  BlockType: BlockType
  openDrawer: boolean
  setFormType: (mode: FormType) => void
  setBlockType: (type: BlockType) => void
  setOpenDrawer: (open: boolean) => void
}

export const useFormMode = create<FormMode>((set) => ({
  formMode: undefined,
  BlockType: 'text',
  openDrawer: false,
  setFormType: (mode) => set({ formMode: mode }),
  setBlockType: (type) => set({ BlockType: type }),
  setOpenDrawer: (open: boolean) => set({ openDrawer: open })
}))
