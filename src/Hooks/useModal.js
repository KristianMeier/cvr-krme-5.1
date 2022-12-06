import { useState } from 'react'

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function toggleModal() {
    setIsModalVisible(!isModalVisible)
  }
  return {
    isModalVisible,
    toggleModal,
  }
}
