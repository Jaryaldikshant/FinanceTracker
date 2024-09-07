// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx';
// import './index.css'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//     <GlobalStyle />
//     <App />
//   </StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GlobalProvider>
    <GlobalStyle/>
    <App/>
    </GlobalProvider>
  </React.StrictMode>
)
