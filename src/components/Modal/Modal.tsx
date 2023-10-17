import React, { useCallback, useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { FaFigma } from 'react-icons/fa6'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'

interface CardInterface {
  title: string
  shortDescription: string
  link: string
  image?: string
  subtitle_1?: string
  subtitle_2?: string
  subtitle_3?: string
  figma?: string
  github?: string
  smallCardClick?: boolean
}

interface ModalProps {
  isOpen: Boolean
  onClose: () => void
  selectedProject: CardInterface | null
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedProject }) => {
  const [showModal, setShowModal] = useState(isOpen)
  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  if (selectedProject === null) {
    return null
  }
  const handleClick = (link: string) => {
    window.open(link, '_blank')
  }

  // const ExternalButtons = () => {
  //   if (
  //     typeof selectedProject.github !== 'string' &&
  //     typeof selectedProject.figma !== 'string'
  //   ) {
  //     return null
  //   }
  //   return (
  //     <div className={styles.modalButtonWrapper}>
  //       {typeof selectedProject.github === 'string' && (
  //         <IconContext.Provider
  //           value={{ color: 'black', className: styles.icon }}
  //         >
  //           <AiOutlineGithub
  //             size={30}
  //             onClick={() => handleClick(selectedProject.github as string)}
  //             onTouchStart={() => handleClick(selectedProject.github as string)}
  //           />
  //         </IconContext.Provider>
  //       )}
  //       {typeof selectedProject.figma === 'string' && (
  //         <IconContext.Provider
  //           value={{ color: 'black', className: styles.icon }}
  //         >
  //           <FaFigma
  //             size={30}
  //             onClick={() => handleClick(selectedProject.figma as string)}
  //             onTouchStart={() => handleClick(selectedProject.figma as string)}
  //           />
  //         </IconContext.Provider>
  //       )}
  //     </div>
  //   )
  // }

  return (
    <motion.div
      className={styles.modalContainer}
      initial={{ opacity: 0, translateY: '100%' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.modalWrapper}>
        {showModal ? (
          <div className={styles.modalContent}>
            <div className={styles.modalTopBar}>
              <button onClick={handleClose} className={styles.modalClose}>
                <AiOutlineClose size={38} color="black" />
              </button>
            </div>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalHeading}>{selectedProject.title}</h2>
            </div>

            {selectedProject.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={selectedProject?.image}
                  alt="ball of roots logo"
                  width={500}
                  height={300}
                />
              </div>
            )}
            {/* {(selectedProject.figma || selectedProject.github) && (
                <ExternalButtons />
              )} */}
            <div className={styles.modalBody}>
              <p className={styles.bodyText}>{selectedProject.subtitle_1}</p>
              <br />
              <p className={styles.bodyText}>{selectedProject.subtitle_2}</p>
              <br />
              <p className={styles.bodyText}>{selectedProject.subtitle_3}</p>
            </div>

            <div className={styles.modalButtonContainer}>
              <button
                className={styles.modalButton}
                onClick={() => handleClick(selectedProject.link)}
              >
                To the site
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

export default Modal
