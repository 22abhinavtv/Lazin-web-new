import { MAIN_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Section from './Section'

export default function Project() {
    return (
        <Grid container bgcolor={MAIN_COLOR} >

            <Banner />

            <Section />
        </Grid>
    )
}
