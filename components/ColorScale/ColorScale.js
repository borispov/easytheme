import { useState } from 'react'
import Heading from '../Heading'

const ColorScale = ({ colors, colorName }) => {

  const [selectedColor, selectColor] = useState(null)

  const colorClickHandler = (color) => {
    console.log(color)
    selectColor(color)
  }

  return (
    <div className="flex flex-row my-2">
      <Heading variant='h4' other="self-center capitalize mr-4 w-12">{colorName}</Heading>
      {
        colors.map(({ name, hexCode }, i) => (
            <span
              key={i}
              onClick={() => colorClickHandler(hexCode)}
              className={`
                inline-block
                rounded-md
                tracking-wide
                shadow-inner
                py-2
                px-3
                mx-1
                font-bold
                text-xs
                cursor-pointer
                text-${name > 500 && 'white'}
                bg-${colorName}-${name}`}
            >
              {name}
            </span>
        ))
      }
    </div>
  )
}

export default ColorScale
