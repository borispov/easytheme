import React from 'react'

const settings = {
  color: {
    primary: 'bg-orange-600 text-white',
    secondary: 'bg-teal-400 text-white text-sm px-4',
    danger: 'bg-red-600 text-white',
  },
  size: {
    big: 'py-2 px-6',
    medium: 'py-2 px-4',
    small: 'py-1 px-4'
  },
  hover: { color: 'hover:text-white' },
  focus: { color: 'focus:text-white' },
}

const Button = ({ children, secondary, danger, big, small, hoverColor, rounded }) => {

  const color = secondary && 'secondary' || danger && 'danger' || 'primary'
  const size = big && 'big' || small && 'small' || 'medium'

  const round = rounded ? `rounded-${rounded}` : ''
  
  const classNames = [
    settings.color[color],
    settings.size[size],
    hoverColor ? `hover:${hoverColor}` : settings.hover.color,
    round,
    'tracking-wider'
  ]

  return (
    <button className={classNames.join(' ')}>
      {children}
    </button>
  )
}



export default Button
