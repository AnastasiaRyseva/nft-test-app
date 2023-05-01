import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

/**
 * 
 * @param {number} intParam 
 * @returns 
 */
const Grid = ({
    className,
    children,
    gap
  }) => {
  return (
    <div className={cl(className, style.grid)} style={{gap: gap}}>{children}</div>
  )
}

export default Grid