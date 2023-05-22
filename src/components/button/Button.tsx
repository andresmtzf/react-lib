import React, { ButtonHTMLAttributes } from 'react'
import './Button.scss'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  backgroundColor?: string | null
  size?: string
  label: string
}

const Button: React.FC<Props> = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary'

  return (
    <button type='button' className={`button button--${size} ${mode}`} {...props}>
      {label}
    </button>
  )
}

export default Button
