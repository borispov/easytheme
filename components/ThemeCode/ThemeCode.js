import { useContext } from 'react'
import Heading from '../Heading'


const ThemeCode = ({ primary, secondary, text, background, error, success, surfaces, breakpoints, fontFamily }) => {

  return (
    <div className="bg-gray-900">
      <pre>
        <code className="text-orange-200 text-xs cursor-text">{`
theme: {
  fontFamily: "${fontFamily}",

  primary: {
    main: "${primary.main}",
    light:  "${secondary.light}",
    dark: "${secondary.dark}",
  },

  text: {
    primary: "${text.primary}",
    secondary: "${text.secondary}",
    disabled: "${text.disabled}",
    lightPrimary: "${text.lightPrimary}",
    lightSecondary: "${text.lightSecondary}"
  },

  error: {
    main: "${error.main}",
    light: "${error.alt}",
    dark: "${error.alt2}",
  },

  success { 
    main: "${success.main}",
    light: "${success.light}",
    dark: "${success.dark}",
  },

  surfaces: {
    onBg: "${surfaces.onBg}",
    onPrimary: "${surfaces.onPrimary}",
    onError: "${surfaces.onError}",
  },

  backgrounds: {
    main: "${background.main}",
    alt: "${background.alt}",
  },

  white: "#FFF",
  black: "#000",

  breakpoints: {
    xs: "${breakpoints.xs}", 
    small: "${breakpoints.sm}",
    medium: "${breakpoints.md}",
    large: "${breakpoints.lg}",
    xl: "${breakpoints.xl}"
  }

}


          `}
        </code>
      </pre>
    </div>
  )
}
export default ThemeCode
