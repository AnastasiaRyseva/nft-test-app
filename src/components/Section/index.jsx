import React from 'react'
import cl from 'classnames'
import style from './index.module.scss'

const Section = ({
    className,
    children
  }) => {
  return (
    <section
        className={cl(className, style.section)}
    >
      {children}
    </section>
  )
}

export default Section