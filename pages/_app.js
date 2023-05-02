import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'

//wraps entire app
function MyApp({ Component, pageProps }) {
  // get the layout for the page or use the default layout
  const getLayout = Component.getLayout || ((page) => page)

  return (
  <UserProvider>
    {/* pass the page component w/ its props */}
    {getLayout(<Component {...pageProps} />, pageProps)}
  </UserProvider>)
}

export default MyApp
