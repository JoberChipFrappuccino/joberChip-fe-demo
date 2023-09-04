import axios from 'axios'
import { authAPI } from '@/api/apiInstance'
import { User } from '@/models/user'
import { useUserStore } from '@/store/user'
import { useState } from 'react'

type SignInForm = {
  email: string
  password: string
}

type SignInResponse = {
  message: string
  status: 'success' | 'failure'
}

export const useUser = () => {
  const { user, setUser, removeUser } = useUserStore()
  const [isLoading, setIsLoading] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)

  const signIn = async (signInForm: SignInForm): Promise<SignInResponse> => {
    try {
      setIsLoading(true)
      const { data } = await authAPI<User>('/api/auth/signin', {
        method: 'POST',
        data: JSON.stringify(signInForm)
      })
      setIsSignedIn(true)
      setIsLoading(false)
      setUser(data)

      return {
        message: '로그인에 성공했습니다.',
        status: 'success'
      }
    } catch (err) {
      setIsLoading(false)
      setIsSignedIn(false)
      if (axios.isAxiosError(err)) {
        return {
          message: err.response?.data.message || '로그인에 실패했습니다.',
          status: 'failure'
        }
      }
      return {
        message: '로그인에 실패했습니다.',
        status: 'failure'
      }
    }
  }

  // useEffect(() => {
  //   authAPI<User>('/api/auth/me')
  //     .then(({ data }) => {
  //       setUser(data)
  //       setLoggedIn(true)
  //     })
  //     .catch((err) => {
  //       console.log('CLIENT CATCH ERROR', err)
  //     })
  // }, [location.pathname])

  return {
    user,
    isSignedIn,
    isLoading,
    signIn,
    signOut: removeUser
  }
}
