import React from 'react';
import { Link } from "react-router-dom";  

import cl from 'classnames'
import style from './index.module.scss'
import Account from '../Account';
import Logo from '../Logo';
import logo from '../../Logo_nft.svg';
import Burger from '../Burger';


const Menu = ({
    className,
    active,
    setActive
  }) => {
  return (
    <div className={active ? style.wrapperActive : style.wrapper} 
          onClick={() => setActive(false)}>
        <div className={style.content} onClick={e => e.stopPropagation()}>
            {/* <div className={active ? style.logo : style.hiddenLogo}>
              <Logo src={logo} />
              
            </div> */}
            <ul className={cl(className, style.menu)}>
              <li className={style.menuItem}>
                <Link to="/" className={style.menuItem_Link}>Главная</Link>
              </li>
              <li className={style.menuItem}>
                <Link to="/Privileges" className={style.menuItem_Link}>Что даст обучение</Link>
              </li>
              <li className={style.menuItem_btn}>
                <Link to="/UserAccount"><Account>Личный кабинет</Account></Link>
              </li>
            </ul>
          </div>
      </div>
  )
}

export default Menu