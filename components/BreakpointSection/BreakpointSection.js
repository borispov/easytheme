import Heading from '../Heading'

const BreakpointSection = () => {
  return (
    <div>
      <Heading variant='h3' bold fontSize='text-xl' color='text-black' other="tracking-wide">
        Breakpoints
      </Heading>
      <div className="flex flex-col lg:flex-row flex-wrap">

        <div className='mx-2 md:w-1/3'>
          <Heading variant='h4' semiBold padding='pl-1' fontSize='text-sm' color='text-secondary'>
            xs
          </Heading>
          <input type='text' className='py-2 px-2 rounded-sm w-full' placeholder='330px' />
        </div>

        <div className='mx-2 md:w-1/3'>
          <Heading variant='h4' padding="pl-1" semiBold fontSize='text-sm' color='text-secondary'>
            md
          </Heading>
          <input type='text' className='py-1 px-2 rounded-sm w-full' placeholder='660px'/>
        </div>

        <div className='mx-2 md:w-1/3'>
          <Heading variant='h4' semiBold padding='pl-1' fontSize='text-sm' color='text-secondary'>
            lg
          </Heading>
          <input type='text' className='py-1 px-2 w-3/12 rounded-sm w-full' placeholder='330px' />
        </div>

        <div className='mx-2 md:w-1/3'>
          <Heading variant='h4' padding="pl-1" semiBold fontSize='text-sm' color='text-secondary'>
            xl
          </Heading>
          <input type='text' className='py-1 px-2 rounded-sm w-full' placeholder='660px'/>
        </div>


      </div>
    </div>
  )
}
export default BreakpointSection
