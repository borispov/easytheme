import {
  useState,
  useEffect,
  createContext
} from 'react'

import defaultPalette from '../lib/defaultPalette'

export const ConfigContext = createContext()

export const ConfigProvider = (props) => {

  const [ config, setConfig ] = useState(defaultPalette)

  useEffect(() => {
    setConfig(config)
  }, [config])

  return (
    <ConfigContext.Provider value={{ config, setConfig }} >
      {props.children}
    </ConfigContext.Provider>
  )
}
