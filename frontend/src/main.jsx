import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BlitterProvider } from './Context/BlitterContext';

ReactDOM.render(
  <BlitterProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlitterProvider>,
  document.getElementById('root')
)
