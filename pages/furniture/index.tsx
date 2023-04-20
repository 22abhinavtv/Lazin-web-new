import Banner from '@/Components/Furniture/Banner'
import Items from '@/Components/Furniture/Items'

import { Grid } from '@mui/material'
import React from 'react'

function index() {
    return (
        <Grid container>

            <Banner />

            <Items />

        </Grid>
    )
}

export default index