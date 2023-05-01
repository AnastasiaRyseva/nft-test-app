import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

const Button = ({
    className,
    children,
    onClick,
    disabled
  }) => {
  return (
    <button
          className={cl(className, style.button)}
          disabled={disabled}
          onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button