import React from 'react'
import styles from './ProgressBar.module.scss'

interface ProgressBarInterface {
  duration: string
  progress: string
}

const ProgressBar: React.FC<ProgressBarInterface> = ({
  duration,
  progress
}) => {
  function millisToMinutesAndSeconds(duration: string) {
    var minutes = Math.floor(parseInt(duration) / 60000)
    var seconds = ((parseInt(duration) % 60000) / 1000).toFixed(0)
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds
  }

  const totalTrackTime = millisToMinutesAndSeconds(duration)
  const nowTime = millisToMinutesAndSeconds(progress)

  const width_completed = (parseInt(progress) / parseInt(duration)) * 100
  const filler = {
    height: '100%',
    width: `${width_completed}%`,
    backgroundColor: 'bisque',
    borderRadius: 'inherit'
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8px'
      }}
    >
      <p className={styles.timestamp} style={{ paddingRight: '4px' }}>
        {nowTime}
      </p>
      <div className={styles.progressbar_container}>
        <div style={filler}>
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
