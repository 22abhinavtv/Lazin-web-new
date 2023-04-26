import About from '@/Components/About/About'
import { MAIN_COLOR } from '@/utils/colors';
import { Grid } from '@mui/material'
import React from 'react';


function index() {
    return (
        <Grid container bgcolor={MAIN_COLOR} sx={{ mt: { xs: 7, lg: 10 }, }}>

            <About />

        </Grid>
    )
}

export default index