import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

const Logo = ({
    className,
    src
  }) => {
  return (
    <div className={cl(className, style.logo)}>
        <img src={src} alt='logo'></img>
    </div>
  )
}

export default Logo