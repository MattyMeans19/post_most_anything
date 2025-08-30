import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Form } from 'react-router'
import './index.css'
import App from './App.jsx'
import Forums from './Forums.jsx'
import QnA from './QnA.jsx'
import Recent from './Recent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/forums' element={<Forums />}></Route>
        <Route path='/qna' element={<QnA />}></Route>
        <Route path='/recent' element={<Recent />}></Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
