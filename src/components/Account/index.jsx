import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

const Account = ({
    className,
    children,
    onClick,
    disabled
  }) => {
  return (
    <button
          className={cl(className, style.buttonAccount)}
          disabled={disabled}
          onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Account