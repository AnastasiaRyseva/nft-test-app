import React from 'react'
import cl from 'classnames'
import style from './index.module.scss'

const Section = ({
    className,
    children
  }) => {
  return (
    <header
        className={cl(className, style.header)}
    >
      {children}
    </header>
  )
}

export default Section