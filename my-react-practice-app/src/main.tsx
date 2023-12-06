import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import App2 from './training/useState.tsx'
import App3 from './training/useEffect.tsx'
import App4 from './training/useRef.tsx'
import App5 from './training/useContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <App5 />
  </React.StrictMode>,
)
