import { useUserStore } from '@/store/user'
import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const { isSignedIn, getUserInfo } = useUserStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isSignedIn) {
      if (location.pathname === '/signup' || location.pathname === '/signin') {
        navigate('/')
      }
    }

    if (!isSignedIn) {
      getUserInfo().then((res) => {
        if (!res) {
          if (location.pathname !== '/signup') {
            navigate('/signin')
          }
        }
        setIsLoading(false)
      })
    }
  }, [location.pathname])

  return (
    <div>
      <div className="m-4">
        <Link className="m-2" to="/">
          Home
        </Link>
        <Link className="m-2" to="/detail">
          Detail
        </Link>
      </div>
      {isLoading ? <div>Loading ...</div> : <Outlet />}
    </div>
  )
}
