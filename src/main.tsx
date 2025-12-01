import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux' //引入 redux
import store from './store/index.ts' //引入 reducer商店
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*  Provider包裹App 传入store <Provider store={store}><App /></Provider> */}
    <Provider store={store}><App /></Provider>
    
  </StrictMode>,
)
