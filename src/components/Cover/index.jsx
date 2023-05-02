import React, { useState } from 'react'
import style from './index.module.scss'
import cl from 'classnames'

import Button from '../Button'
import Image from '../Image'
import ManPictureSmall from '../../images/MAN_small.png'
import styleImage from '../Image/index.module.scss'
import Modal from '../Modal'

const Cover = ({
    className,
    title,
    text
  }) => {
  
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <Button onClick={() => setIsOpenModal(true)}>Начать зарабатывать на NFT</Button>
      <Modal
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
      >

      </Modal>
    </div>
  )
}

export default Cover