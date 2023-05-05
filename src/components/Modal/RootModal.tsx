import React from 'react'
import useProjectModal from '../hooks/useProjectModal'
import Modal from './Modal'

const RootModal = () => {
  const rootModal = useProjectModal()
  console.log(rootModal.isOpen)
  return (
    <Modal 
      isOpen={rootModal.isOpen}
      onClose={rootModal.onClose}
    />
  )
}

export default RootModal