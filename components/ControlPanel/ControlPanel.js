import { useState } from 'react'

import Heading from '../Heading'

import initialState from '../../lib/defaultPalette'
import defaultColors from '../../lib/defaultColors'


const tailwindFormat = name => code => name + '-' + code


const fncolor = color => {
  const propEq = v => k => o => o[k] === v
  const hexCodeEq = propEq(color.toLowerCase())('hexCode')
  const findColorIndex = arr => arr.findIndex(hexCodeEq)
  const grabCodeWithIndex = arr => arr[findColorIndex(arr)]['name']
  const colorFind = (a, c) => findColorIndex(c.shades) !== -1 ? tailwindFormat(c.name)(grabCodeWithIndex(c.shades)) : a
  const found = defaultColors.reduce(colorFind, '')
  return found
}


const Row = ({ children }) => (
  <div className="flex flex-row justify-around my-2">
    {children}
  </div>
)

const ColorDiv = ({ bg, color, width, isRound, name, marginSides, order, texts, textColor }) => {

  const [ active, setActive ] = useState(false)
  const round = isRound ? 'rounded-lg' : ''

  const classNames = [
    round,
    `bg-${fncolor(color)}`,
    texts ? 'py-1' : 'py-4',
    texts ? 'px-4' : 'px-8',
    'h-auto',
    marginSides ? 'mx-4' : 'mx-0',
    'w-full',
    texts && 'bg-gray-400',
    textColor && `text-${fncolor(textColor)} text-center text-base`,
    active && 'colordiv--active'
  ]

  const style = bg ? { backgroundColor: color, border: `1px solid hsl(0, 0%, 82%)`, padding: '6px 8px', textAlign: 'center' } : null

  
  return (
    <div className={`flex flex-col flex-start ${width} mx-1 ${order} `}>
      <Heading fontSize='text-sm' bold variant='h1' padding="pl-0" other="capitalize text-center">
        {name}
      </Heading>
      <div>
        <div style={style} className={classNames.join(' ')} onClick={() => setActive(!active)}>
          {
            bg 
              ? color
              : texts
                ? <span style={{ color: textColor }} className='font-bold text-xs text-center'>{textColor && textColor || color}</span>
                : null
          }
        </div>
      </div>
    </div>
  )
}

const ControlPanel = ({ }) => {

  // Break the configuration of color palette down to small components
  // So you can modify them individually.
  const [ theme ] = useState(initialState)
  const [ primary, setPrimary ] = useState(theme?.primary)
  const [ secondary, setSecondary ] = useState(theme?.secondary)
  const [ errorColors, setErrorColors ] = useState(theme?.error)
  const [ success, setSuccess ] = useState(theme?.success)
  const [ textColors, setTextColors ] = useState(theme?.text)
  const [ backgrounds, setBackgrounds ] = useState(theme?.background)
  const [ surfaces, setSurfaces ] = useState(theme?.surfaces)

  return (
    <div className="flex flex-col">

      <Row>
        {
          Object.keys(primary).map((type, idx, s) =>
              <ColorDiv 
                name={type === 'main' ? 'primary' : type}
                color={primary[type]}
                isRound={true}
                width={idx === 0 ? 'w-1/2' : 'w-1/4'}
              />
          )
        }
      </Row>

      <Row>

        {
          Object.keys(secondary).map((type, idx, s) =>
              <ColorDiv 
                name={type === 'main' ? 'secondary' : type}
                color={secondary[type]}
                isRound={true}
                width={type === 'main' ? 'w-1/2' : 'w-1/4'}
                order={type === 'main' ? 'order-1' : type === 'dark' ? 'order-2' : 'order-3'}
              />
          )
        }

      </Row>

      <Row>

        {
          Object.keys(backgrounds).map((type, idx, s) =>{
            return (
              <ColorDiv 
                bg
                name={type}
                color={backgrounds[type]}
                isRound={true}
                width={'w-full'}
              />
              
          )}
          )
        }

      </Row>

      <Row>
        {
          Object.keys(errorColors).map(( type, idx) =>
            <ColorDiv
              name={type === 'main' ? 'Error' : type}
              color={errorColors[type]}
              isRound={true}
              width="w-1/3"
            />
          )
        }
      </Row>

      <Row>
        {
          Object.keys(success).map(( type, idx) =>
            <ColorDiv
              name={type === 'main' ? 'Success' : type}
              color={success[type]}
              isRound={true}
              width="w-1/3"
              order={type === 'main' ? 'order-1' : 'order-2'}
            />
          )
        }
      </Row>

      <Heading variant='h1' bold color='text-black' fontSize='text-2xl' other='mt-8 mb-2 text-center'>Text</Heading>

      <Row>
        {
          Object.keys(textColors).slice(0, 3).map((type, idx) =>
            <ColorDiv
              name={type === 'main' ? type : type}
              color={textColors[type]}
              texts
              isRound={true}
              width="w-1/3"
              order={type === 'main' ? 'order-1' : 'order-2'}
              text
            />
          )
        }
      </Row>

      <Row>
        {
          Object.keys(surfaces).map((type, idx) =>
            <ColorDiv
              name={type}
              color={type === 'onPrimary' ? primary.main : type === 'onError' ? errorColors.main : backgrounds.main}
              texts
              textColor={surfaces[type]}
              isRound={true}
              width="w-1/3"
              order={type === 'main' ? 'order-1' : 'order-2'}
              text
            />
          )
        }
      </Row>


    </div>
  )
}

export default ControlPanel
