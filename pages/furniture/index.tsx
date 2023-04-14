import Furniture from '@/Components/Furniture/Furniture'
import Footer from '@/Components/UI/Footer/Footer'
import Header from '@/Components/UI/Header/Header'
import MobileHeader from '@/Components/UI/Header/MobileHeader'
import { Grid } from '@mui/material'
import React from 'react'

function index() {
    return (
        <Grid container>

            <Header />

            <MobileHeader />




            <Furniture />




            

            <Footer />
        </Grid>
    )
}

export default index