import React, { useEffect, useRef, useState } from 'react'
import styles from './ProgressBar.module.scss'

interface ProgressBarInterface {
  duration: number
  progress: number
}

const ProgressBar: React.FC<ProgressBarInterface> = ({
  duration,
  progress
}) => {
  function millisToMinutesAndSeconds(duration: number) {
    var minutes = Math.floor(duration / 60000)
    var seconds = ((duration % 60000) / 1000).toFixed(0)
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds
  }

  const [currentProgress, setCurrentProgress] = useState(progress)
  const currentProgressRef = useRef(progress)

  useEffect(() => {
    setCurrentProgress(progress)
    currentProgressRef.current = progress

    const delay = 1000

    const interval = setInterval(() => {
      if (currentProgressRef.current < duration - 1000) {
        const newProgress = currentProgressRef.current + delay
        setCurrentProgress(newProgress)
        currentProgressRef.current = newProgress // Update ref with new value
      }
    }, delay)
    return () => clearInterval(interval)
  }, [duration, progress])

  const totalTrackTime = millisToMinutesAndSeconds(duration)
  const width_completed = (currentProgress / duration) * 100

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8px',
        alignItems: 'center'
      }}
    >
      <p className={styles.timestamp} style={{ paddingRight: '4px' }}>
        {millisToMinutesAndSeconds(currentProgress)}
      </p>
      <div className={styles.progressbar_container}>
        <div
          style={{
            height: '100%',
            backgroundColor: 'rgb(211, 85, 7)',
            borderRadius: 'inherit',
            transition: 'width 0.5s',
            width: width_completed < 100 ? `${width_completed}%` : '100%'
          }}
        >
          <span></span>
        </div>
      </div>
      <p className={styles.timestamp} style={{ paddingLeft: '4px' }}>
        {totalTrackTime}
      </p>
    </div>
  )
}

export default ProgressBar
