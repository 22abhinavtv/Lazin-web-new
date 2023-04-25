import { MAIN_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Images from './Images'
import Section2 from './Section2'



export default function Gallery() {
    return (
        <Grid container bgcolor={MAIN_COLOR}>

            <Banner />

            <Section2 />

            <Images />

        </Grid>
    )
}
