import { Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
const Layout = loadable(() => import('./components/Layout'))
const Home = loadable(() => import('./pages/Home'))
const Detail = loadable(() => import('./pages/Detail'))

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
      </Route>
      2
    </Routes>
  )
}
