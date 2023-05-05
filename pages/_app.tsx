import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'
import { NavBar } from '@/Components/UI/Header/NavBar'
import { MobileNavBar } from '@/Components/UI/Header/MobileNavBar'
import { Footer } from '@/Components/UI/Footer/Footer'


const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {




  return (

    <QueryClientProvider client={queryClient}>

      <Head>

        <title>Lazin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <script src="https://kit.fontawesome.com/ed3b32139e.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap" rel="stylesheet" />

      </Head>


      <NavBar />

      <MobileNavBar />


      <Component {...pageProps} />


      <Footer />


    </QueryClientProvider>

  )
}

export default MyApp
