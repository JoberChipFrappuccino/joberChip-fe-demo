import { BrowserRouter } from 'react-router-dom'
import { hydrateRoot } from 'react-dom/client'
import App from '@/App'

import '@/tailwind.css'
import { loadableReady } from '@loadable/component'

loadableReady(() => {
  hydrateRoot(
    document.getElementById('root') as HTMLDivElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})

// https://webpack.kr/api/hot-module-replacement/
if (module.hot) {
  if (process.env.NODE_ENV === 'development') {
    module.hot.accept()
    document.querySelector('#root > *')?.remove()
  }
}
