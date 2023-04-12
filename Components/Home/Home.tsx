import { Grid } from '@mui/material'
import React from 'react'
import Heading from '../UI/Heading/Heading'
import ImageContent from '../UI/ImageContent/ImageContent'
import Slider from '../UI/Slider/Slider'
import Banner from './Banner/Banner'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import UsedWoods from './UsedWoods/UsedWoods'
import WorkFlow from './WorkFlow/WorkFlow'
import Works from './Works/Works'

export default function Home() {
    return (
        <Grid container>

            <Banner />

            <UsedWoods />

            <WorkFlow />

            <Section2 />

            <Works />

            <Section3 />



            {/* <ImageContent /> */}

        </Grid>
    )
}
