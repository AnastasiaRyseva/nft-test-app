import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

/**
 * 
 * @param {position} left | right 
 * @returns 
 */
const EllipseSmall = ({
    top = null,
    left = null,
    right = null,
    bottom = null,
    src
  }) => {
    const stylesParams = {};
    if (top !== null) {
      stylesParams.top = top;
    }
    if (left !== null) {
      stylesParams.left = left;
    }
    if (right !== null) {
      stylesParams.right = right;
    }
    if (bottom !== null) {
      stylesParams.bottom = bottom;
    }

    return (
      <img className={style.ellipseSmall} style={{...stylesParams}} src={src}/>
    )
    

}

export default EllipseSmall