import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

const Image = ({
    className,
    src,
    alt,
  }) => {
  return (
    <div className={cl(className, style.image)}>
        <img src={src} alt={alt}></img>
    </div>
  )
}

export default Image