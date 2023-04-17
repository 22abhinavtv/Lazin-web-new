import Heading from '@/Components/UI/Heading/Heading'
import { MAIN_C0LOUR } from '@/utils/colors'
import { Box } from '@material-ui/core'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Banner() {
    return (
        <Grid container bgcolor={MAIN_C0LOUR} sx={{
            mt: { xs: 7, lg: 10 },
        }}>

            <Grid md={6} lg={6} sm={6} container alignItems="center" sx={{
                //bgcolor: MAIN_C0LOUR
            }}>


                <Grid
                    component="img"
                    sx={{
                        height: 525,
                        width: 650,
                        maxHeight: { xs: 233, sm: 300, md: 167 },
                        maxWidth: { xs: 300, sm: 350, md: 250 },
                        ml: { xs: 0, lg: 'auto' },
                        m: { xs: 2 }
                    }}
                    alt="The house from the offer."
                    src="assets/furniture/banner/furniture-banner.jpeg"

                />
            </Grid>

            <Grid container md={6} lg={5} sm={6} sx={{
                bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' },

            }}>
                <Typography sx={{}}>
                    Furniture that <br />
                    Everyone <br />
                    Loves
                </Typography>


            </Grid>


        </Grid>


    )
}