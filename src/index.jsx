import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AuthContextProvider } from './Context/AuthContext'
import { MiscContextProvider } from './Context/MiscContext'
import { SearchContextProvider } from './Context/SearchContext'
import { ThemeContextProvider } from './Context/ThemeContext'
import './Styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContextProvider>
        <MiscContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MiscContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
