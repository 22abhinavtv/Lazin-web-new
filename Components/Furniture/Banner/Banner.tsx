import Heading from '@/Components/UI/Heading/Heading'
import { MAIN_C0LOUR } from '@/utils/colors'
import { Box } from '@material-ui/core'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Banner() {
    return (
        <Grid container height='70vh' bgcolor={MAIN_C0LOUR} sx={{
            mt: { xs: 7, lg: 10 }
        }}>

            <Grid lg={6} container alignItems="center" sx={{
                //bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' },
                //bgcolor: MAIN_C0LOUR
            }}>


                <Grid
                    component="img"
                    sx={{
                        height: { xs: 250, lg: 525 },
                        width: { xs: 250, lg: 650 },
                        ml: { xs: 3, lg: 'auto' }
                    }}
                    alt="The house from the offer."
                    src="assets/furniture/banner/furniture-banner.jpeg"

                />

            </Grid>

            <Grid lg={6} container bgcolor="red" >

                <Grid container bgcolor="blue">cvbcv</Grid>

                <Grid container sx={{
                    bgcolor: { xs: "green", sm: 'green', md: 'yellow', lg: 'pink' }
                }}>cvbcv</Grid>

            </Grid>

        </Grid>
    )
}
