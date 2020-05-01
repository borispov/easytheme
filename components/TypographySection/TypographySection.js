import Heading from '../Heading'

const TypographySection = () => {

  return (
    <div>
      <Heading variant='h3' bold fontSize='text-xl' color='text-black' other="tracking-wide">
        Typography
      </Heading>
      <div className="flex">
        <span className="text-base pl-1 w-32">Primary Font: </span>
        <input type="text" className="italic ml-2 bg-transparent border-solid border-b border-gray-600 focus:outline-none w-40 focus:bg-gray-200 focus:shadow-xl placeholder-gray-500 placeholder-opacity-25" placeholder="Roboto" />
      </div>
      <div className="flex pt-1">
        <span className="text-base pl-1 w-32">Secondary Font: </span>
        <input type="text" className="ml-2 w-40 bg-transparent border-solid border-b border-gray-600 focus:border-4 focus:outline-none focus:shadow-xl placeholder-gray-500 placeholder-opacity-50" placeholder="PT Serif" />
      </div>
    </div>
  )
}

export default TypographySection
