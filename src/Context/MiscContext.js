import { createContext, useContext, useState } from 'react'

const MiscContext = createContext()

export const MiscContextProvider = ({ children }) => {
  // Navbar
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => setShowLinks(!showLinks)

  // Other Context

  return (
    <MiscContext.Provider value={{ showLinks, toggleLinks }}>
      {children}
    </MiscContext.Provider>
  )
}

export const useMiscContext = () => useContext(MiscContext)
