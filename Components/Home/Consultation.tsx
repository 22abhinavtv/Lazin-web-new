import { MAIN_COLOR, SECONDARY_COLOR } from '@/utils/colors'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import Description from '../UI/Description/Description';
import { PrimaryButton } from '../UI/Button/CustomizedButton';

export const Consultation = () => {
    return (
        <Grid container bgcolor={MAIN_COLOR} justifyContent="center">

            <Grid container xs={11} lg={8} justifyContent="center" bgcolor="#ffff" sx={{
                m: { xs: 2, sm: 2, md: 3, lg: 5 },
                borderRadius: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>


                <Grid container bgcolor="" justifyContent="center" sx={{
                    p: 2,
                    //bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' }
                }}>

                    <Grid container lg={2} justifyContent="center" alignItems="center" bgcolor="">

                        <img width="70%" alt="The house from the offer." src="/assets/home/banner/shape-1.png" />

                    </Grid>

                    <Grid container lg={8} justifyContent="center" alignItems="center" bgcolor="">


                        <Typography variant='h5' fontWeight="bold" sx={{ mb: 3, textAlign: "center", fontFamily: 'Syne' }}>let's discuss for a cool project</Typography>


                        <Typography variant='body1' fontWeight="semibold" sx={{
                            mb: 3, textAlign: "center",
                            color: "grey"
                        }}>The extent of our firm size of our global interor design extends and
                            long standing accosication with sellers in designing</Typography>

                        <PrimaryButton px={6} bgcolor={SECONDARY_COLOR} >Consultation Now</PrimaryButton>

                    </Grid>

                    <Grid container lg={2} justifyContent="center" alignItems="end" bgcolor="">

                        <img width="60%" alt="The house from the offer." src="/assets/home/banner/shape-2.png" />


                    </Grid>


                </Grid>

            </Grid>


        </Grid >
    )
}
