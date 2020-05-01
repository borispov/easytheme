import App from 'next/app'
import '../css/tailwind.css'
import { ConfigProvider } from '../context/ConfigContext'

const MyApp = ({ Component, pageProps }) => {

  return (
    <ConfigProvider>>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
