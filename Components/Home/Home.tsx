import { Grid } from '@mui/material'
import React from 'react'
import Heading from '../UI/Heading/Heading'
import Banner from './Banner/Banner'
import UsedWoods from './UsedWoods/UsedWoods'
import WorkFlow from './WorkFlow/WorkFlow'

export default function Home() {
    return (
        <Grid container>

            <Banner />

            <UsedWoods />

            <WorkFlow />

            {/* <Heading /> */}

        </Grid>
    )
}
