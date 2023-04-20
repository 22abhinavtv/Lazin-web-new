import { MAIN_COLOR, SECONDARY_COLOR } from '@/utils/colors'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { HoverButton, PrimaryButton } from '../UI/Button/CustomizedButton'

export default function Banner() {

    return (

        <Grid py={10} container bgcolor={MAIN_COLOR} sx={{
            mt: { xs: 7, lg: 10 }, justifyContent: 'center', alignItems: 'center', position: "relative"
        }}>

            <img width="55%" src="/assets/home/banner/banner.jpeg" alt="" />


            <Grid sx={{
                bgcolor: "white", p: 4,
                position: 'absolute', top: 40, right: 40
            }}>

                <Typography variant='h5' sx={{ my: 2, fontFamily: 'Syne' }}>Furniture that
                    <br />  Everyone Loves</Typography>

                <Typography sx={{ mb: 6 }}>An interior designer is someone who <br />
                    plans researches,coordinations and
                    <br />
                    manages enhancement projects</Typography>

                <Grid container justifyContent="end" sx={{ bgcolor: "white", position: "absolute", bottom: 0, right: 0 }}>


                    <HoverButton px={3} bgcolor={SECONDARY_COLOR}>Start your project</HoverButton>


                </Grid>

            </Grid>

        </Grid >
    )
}
