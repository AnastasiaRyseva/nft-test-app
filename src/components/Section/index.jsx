import React from 'react'
import cl from 'classnames'
import style from './index.module.scss'

const Section = ({
    className,
    paddingTop,
    children
  }) => {
  return (
    <section
        className={cl(className, style.section)}
        style={{paddingTop: paddingTop}}
    >
      {children}
    </section>
  )
}

export default Section