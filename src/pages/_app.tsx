import '@/styles/index.css'
import Header from '@/config'

function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Component {...pageProps} />
    </>
  )
}

export default App
