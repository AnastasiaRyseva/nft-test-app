import React from 'react'
import cl from 'classnames'

import style from './index.module.scss'

const Title = ({
    className,
    type,
    children
  }) => {
    if (type === 'small') {
      return (
        <h3
          className={cl(className, style.title, style.titleSmall)}
        >
          {children}
        </h3>
      )
    }

    return (
      <h2
        className={cl(className, style.title, style.titleMedium)}
      >
        {children}
      </h2>
    )

}

export default Title; 