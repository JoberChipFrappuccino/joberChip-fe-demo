import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'
const Layout = loadable(() => import('./components/Layouts/Layout'))
const Home = loadable(() => import('./pages/Home'))
const Detail = loadable(() => import('./pages/Detail'))
const SignUp = loadable(() => import('./pages/SignUp'))
const SignIn = loadable(() => import('./pages/SignIn'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>
    </Routes>
  )
}
