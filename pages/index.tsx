import Footer from '@/Components/UI/Footer/Footer'
import Form from '@/Components/UI/Form/Form'
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

      <Form />

      <Footer />

    </Grid>
  )
}
