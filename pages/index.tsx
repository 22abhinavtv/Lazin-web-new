import Footer from '@/Components/UI/Footer/Footer'
import Header from '@/Components/UI/Header/Header'
import MobileHeader from '@/Components/UI/Header/MobileHeader'
import { Grid } from '@mui/material'

import MainPage from './MainPage'


export default function Home() {
  return (
    <Grid container >

      <Header />

      <MobileHeader />

      <MainPage />

      <Footer />

    </Grid>
  )
}
