import { useContext } from 'react'

import Layout from '../components/Layout'
import Box from '../components/Box/Box';
import ColorScale from '../components/ColorScale/ColorScale';
import defaultColors from '../lib/defaultColors'
import ControlPanel from '../components/ControlPanel/ControlPanel'
import TypographySection from '../components/TypographySection/TypographySection'
import BreakpointSection from '../components/BreakpointSection/BreakpointSection'
import ThemeCode from '../components/ThemeCode/ThemeCode'
import Heading from '../components/Heading'

import { ConfigContext } from '../context/ConfigContext'

export default () => {

  const { config } = useContext(ConfigContext)

  console.log(config);

  return (
    <Layout title="easytheme | Theming Made Fast & Easy">
      <div className="customGrid mt-24 mb-24">

        <div className="colors">
          <h3 className="font-bold tracking-wide text-3xl pl-4 leading-loose"> Color Palette</h3>
          <Box background='bg-gray-100' width='w-6/6' other='rounded-lg p-4 shadow-lg'>
              {
                defaultColors.map((colorObject, i) => (
                    <ColorScale
                      key={i}
                      colors={colorObject.shades}
                      colorName={colorObject.name}
                    />))
              }
          </Box>
        </div>
        <div className="control">
          <h3 className="font-bold tracking-wide text-3xl pl-4 leading-loose"> Control Panel</h3>
          <Box background='bg-gray-100' width='w-auto' other='rounded-lg p-4 shadow-lg'>
            <ControlPanel />
          </Box>
        </div>

        <Box background='bg-gray-200' width="w-auto" other="rounded-lg p-4 shadow-lg" gridArea="typography">
          <TypographySection />
        </Box>

        <div className="themecode">
          <Box background="bg-gray-900" width="w-auto" other="rounded-lg p-4 shadow-md" gridArea="themecode">
            <ThemeCode {...config} />
          </Box>
        </div>


        <div className="breakpointSection">
          <Box background='bg-gray-200' width="w-auto" other="rounded-lg p-4 shadow-lg">
            <BreakpointSection data={config.breakpoints} />
          </Box>
        </div>

      </div>
      <style jsx>{`
        .customGrid {
          display: grid;
          grid-gap: 1em;
          grid-template-columns: 1em minmax(350px, 650px) minmax(150px, 400px) 1em;
          grid-template-rows: auto;
          grid-template-areas:
            ". colors control ."
            ". typography control ."
            ". themecode breakpointSection .";
        }
      `}</style>
    </Layout>
  )
}
