import { MAIN_C0LOUR } from '@/utils/colors'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Section4() {
    return (
        <Grid container bgcolor={MAIN_C0LOUR} justifyContent="center">

            <Grid container xs={11} lg={10} justifyContent="center" bgcolor="#ffff" sx={{
                m: { xs: 2, sm: 2, md: 3, lg: 5 }
            }}>

                <Typography>
                    b
                </Typography>

            </Grid>


        </Grid>
    )
}
