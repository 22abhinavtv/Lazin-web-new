import { MAIN_C0LOUR } from '@/utils/colors'
import { Box } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'

export default function Banner() {
    return (
        <Grid container height='70vh' bgcolor={MAIN_C0LOUR} sx={{
            mt: { xs: 7, lg: 10 }
        }}>

            <Grid lg={6 } container bgcolor="red" alignItems="center">


                <Grid

                    component="img"
                    sx={{
                        height: 525,
                        width: 650,
                        ml: 'auto'

                    }}
                    alt="The house from the offer."
                    src="assets/furniture/banner/furniture-banner.jpeg"
                    
                />

            </Grid>




            <Grid lg={6 } container bgcolor="blue" justifyContent="center">sdfgdf</Grid>






        </Grid>
    )
}
