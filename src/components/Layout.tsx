import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <div className='m-4'>
        <Link className='m-2' to='/'>
          Home
        </Link>
        <Link className='m-2' to='/detail'>
          Detail
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
