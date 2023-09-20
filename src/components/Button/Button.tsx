import React from 'react'
import styles from './Button.module.scss'
interface ButtonProps{
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  cta: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
}


const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  tertiary,
  cta,
  onClick,
  disabled
}) => {
  return (
    <button className={styles.button}>{cta}</button>
  )
}

export default Button