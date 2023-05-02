import React from 'react'
import style from './index.module.scss'


const EllipseSmall = ({
    top = null,
    left = null,
    right = null,
    bottom = null,
    src,
    width
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
    stylesParams.width = width
    return (
      <img className={style.ellipseSmall} style={{...stylesParams}} src={src}/>
    )
}

export default EllipseSmall