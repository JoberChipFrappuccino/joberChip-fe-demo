import { create } from 'zustand'
import { getSpaceAPI } from '@/api/space'
import { Space } from '@/models/space'

interface UserState {
  space: Space
  isFetching: boolean
  isLoaded: boolean
  isFalture: boolean
  loadSpace: (id: string) => Promise<boolean>
  addBlock: (section_id: string, options: object) => Promise<boolean>
  removeBlock: (section_id: string, block_id: string) => Promise<boolean>
  updateBlock: (section_id: string, block_id: string, options: object) => Promise<boolean>
}

export const useSpaceStore = create<UserState>((set) => {
  return {
    space: {},
    isFetching: false,
    isLoaded: false,
    isFalture: false,
    loadSpace: async (id: string) => {
      set((state) => ({ ...state, isFetching: true, isLoaded: false, isFalture: false }))
      const { data } = await getSpaceAPI(id)
      if (data) {
        set((state) => ({ ...state, space: data, isFetching: false, isLoaded: true, isFalture: false }))
        return true
      }
      set((state) => ({ ...state, isFetching: false, isLoaded: false, isFalture: true }))
      return false
    },
    // ! 미구현 ㅎㅅㅎ
    addBlock: async (section_id: string, options: object) => {
      return true
    },
    removeBlock: async (section_id: string, block_id: string) => {
      return true
    },
    updateBlock: async (section_id: string, block_id: string, options: object) => {
      return true
    }
  }
})
