import React from 'react'
import cl from 'classnames'
import style from './index.module.scss'

const ContentWrapper = ({
    className,
    children
  }) => {
  return (
    <div
        className={cl(className, style.contentWrapper)}
    >
      {children}
    </div>
  )
}

export default ContentWrapper