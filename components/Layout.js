import Head from 'next/head'
import Nav from './Nav/Nav'

export default ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <div className="antialiased text-gray-900 flex items-center justify-around min-h-screen">
        { children }
      </div>
    </>
  )
}
