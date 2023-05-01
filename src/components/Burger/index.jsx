import React from 'react'
import style from './index.module.scss'
import cl from 'classnames'

const Burger = ({
    className,
    onClick,
    active
  }) => {
  return (
    <div
        className={active ? style.burgerActive : style.burger}
        onClick={onClick}
    >
    </div>
  )
}

export default Burger