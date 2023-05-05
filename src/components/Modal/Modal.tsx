import React, { useCallback, useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import {AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
interface ModalProps{
  isOpen: Boolean
  onClose: () => void
  title?: string
  body?: string
  footer?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer
}) => {

  const [showModal, setShowModal] = useState(isOpen)
  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  console.log(showModal, 'showmodal')
  const handleClose = useCallback(() => {
    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWrapper}>
        {showModal && 
          <div className={styles.modalContent}>
            <div className={styles.modalTopBar}>
              <button onClick={handleClose} className={styles.modalClose}><AiOutlineClose size={28} color='black'/>
              </button>
              
            </div>
            <div className={styles.modalHeader}>
              <h3 style={{color: 'black'}}>Lorem ipsum dolor</h3>
            </div>

            <div className={styles.imageContainer}>
              <Image src="/ballofroots_ad.png" alt="ball of roots logo" width={200} height = {120} />
            </div>
            
            <div className={styles.modalBody}>
              <p className={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div>
              <hr style={{marginTop: '8px', marginBottom: '24px'}}/>
              </div>
          </div>}
          {!showModal&& 
            <div style={{opacity:'0'}}>
              </div>
          }
      </div>
    </div>
  )
}

export default Modal