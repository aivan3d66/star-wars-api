import React from 'react'
import s from './SuperButton.module.css'

export const SuperButtonComponent = ({red, className, ...restProps}) => {
  const finalClassName = `${red ? s.red : s.default} ${className}`

  return (
    <button
      className={finalClassName}
      {...restProps}
    />
  )
}
