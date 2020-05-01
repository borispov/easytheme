// Default Settings
const settings = {
  mw: 'mw-auto',
  width: 'w-full',
  background: 'bg-white',
  color: 'text-primary'
}

const Box = ({ children, width, mw, background, color, border, other, gridArea }) => {

  const widthStyle = width ?? settings['width']
  const maxWidth = mw ?? settings['mw']
  const borderStyle = border ?? ''
  const classNames = [
    widthStyle,
    maxWidth,
    background ? background : settings['background'],
    color ? color : settings['color'],
    borderStyle,
    'h-auto',
    other ?? '',
    gridArea ?? '',
  ]

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  )
}

export default Box
