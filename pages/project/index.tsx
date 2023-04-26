import Project from '@/Components/Project/Project'
import { Grid } from '@mui/material'
import React from 'react'

function index() {
    return (
        <Grid container sx={{ mt: { xs: 9, lg: 10 } }}>

            <Project />
            
        </Grid>
    )
}

export default index