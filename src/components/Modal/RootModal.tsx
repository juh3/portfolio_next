import React from 'react'
import useProjectModal from '../../utils/useProjectModal'
import Modal from './Modal'

const RootModal = () => {
  const rootModal = useProjectModal()
  return (
    <Modal
      isOpen={rootModal.isOpen}
      onClose={rootModal.onClose}
      selectedProject={rootModal.selectedProject}
    />
  )
}

export default RootModal
