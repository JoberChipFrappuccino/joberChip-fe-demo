import axios from 'axios'
import { authAPI } from '@/api/apiInstance'
import { ACCESS_TOKEN } from '@/constants'
import { User } from '@/models/user'
import { create } from 'zustand'

type LoginForm = {
  email: string
  password: string
}

type LoginResponse = {
  status: 'success' | 'failure'
  message: string
}

interface UserState {
  user: User | Partial<User>
  isFetching: boolean
  isSignedIn: boolean
  signIn: (user: LoginForm) => Promise<LoginResponse>
  signOut: VoidFunction
}
// @ts-ignore ㅎ ㅏ 최선인가..
export const useUserStore = create<UserState>((set) => {
  const store = {
    user: {},
    isFetching: false,
    isSignedIn: false,
    signIn: async (user: User) => {
      set((state) => ({ ...state, isFetching: true, isSignedIn: false }))
      try {
        const { data } = await authAPI<User>('/api/auth/signin', {
          method: 'POST',
          data: JSON.stringify(user)
        })
        set((state) => ({ ...state, user: data, isFetching: false, isSignedIn: true }))
        localStorage.setItem(ACCESS_TOKEN, user.access_token)
        return {
          status: 'success',
          message: '로그인에 성공했습니다.'
        }
      } catch (err) {
        set((state) => ({ ...state, user: {}, isFetching: false, isSignedIn: false }))
        localStorage.removeItem(ACCESS_TOKEN)
        if (axios.isAxiosError(err)) {
          return {
            status: 'failure',
            message: err.response?.data.message
          }
        }
        return {
          status: 'failure',
          message: '네트워크 오류가 발생했습니다. 다시 시도해주세요.'
        }
      }
    },
    signOut: () => {
      // todo : logout API있다면 호출합니다.
      set((state) => ({ ...state, user: {}, isFetching: false, isSignedIn: false }))
      localStorage.removeItem(ACCESS_TOKEN)
    }
  }
  return store
})
