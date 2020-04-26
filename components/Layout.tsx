import Head from 'next/head'

export default ({ title, children }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
    <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
      { children }
    </div>
  )
}
