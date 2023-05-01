import React from 'react'
import cl from 'classnames'

import style from './index.module.scss'
import Title from '../Title'
const Card = ({
    className,
    src,
    text
  }) => {
    return (
      <div
        className={cl(className, style.card)}
      >
        <div className={style.cardSmile}>
          <img src={src}/>
        </div>
        <Title type={'small'}>
          {text}
        </Title>
      </div>
    )

}

export default Card; 