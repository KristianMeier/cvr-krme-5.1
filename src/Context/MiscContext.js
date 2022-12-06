import { createContext, useContext, useState } from 'react'

const MiscContext = createContext()

export const MiscContextProvider = ({ children }) => {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Navbar
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => setShowLinks(!showLinks)

  return (
    <MiscContext.Provider
      value={{ openModal, closeModal, isModalOpen, showLinks, toggleLinks }}
    >
      {children}
    </MiscContext.Provider>
  )
}

export const useMiscContext = () => useContext(MiscContext)
