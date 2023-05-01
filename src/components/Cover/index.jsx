import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

import Button from '../Button'
import Image from '../Image'
import ManPictureSmall from '../../images/MAN_small.png'
import styleImage from '../Image/index.module.scss'

const Cover = ({
    className,
    title,
    text
  }) => {
  return (
    <div className={cl(className, style.cover)}>
      <h1 
        className={style.coverTitle}
        dangerouslySetInnerHTML={{__html: title}}
      >
      </h1>
      <Image src={ManPictureSmall} alt={'man'} display={'none'} className={styleImage.imageBlock}/>
      <p className={style.coverText}
      dangerouslySetInnerHTML={{__html: text}}>
      </p>
      <Button>Начать зарабатывать на NFT</Button>
    </div>
  )
}

export default Cover