import { MAIN_C0LOUR } from '@/utils/colors'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import Description from '../../UI/Description/Description'

export default function Section4() {
    return (
        <Grid container bgcolor={MAIN_C0LOUR} justifyContent="center">

            <Grid container xs={11} lg={8} justifyContent="center" bgcolor="#ffff" sx={{
                m: { xs: 2, sm: 2, md: 3, lg: 5 },
                borderRadius: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>

                <Typography sx={{
                    my: { xs: 1, sm: 1, md: 2, lg: 2 },
                    fontSize: { xs: 18, sm: 25, md: 25, lg: 30 },
                    fontWeight: 600
                }}>let's discuss for a cool project</Typography>

                <Grid container bgcolor="" justifyContent="center" sx={{
                    p: 2,
                    //bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' }
                }}>

                    <Grid container lg={3} justifyContent="center" alignItems="center" bgcolor="">

                        <Grid xs={6} sm={2} lg={7}
                            component="img"
                            sx={{}}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                        />

                    </Grid>

                    <Grid container lg={7} justifyContent="center" alignItems="center" bgcolor="">

                        <Description
                            description="The extent of our firm size of our global interor design extends and
                            long standing accosication with sellers in designing"

                            textAlign="center"
                        />

                    </Grid>

                    <Grid container lg={2} justifyContent="center" alignItems="center" bgcolor="">
                        <img src="" alt="hi" />
                    </Grid>


                </Grid>

            </Grid>


        </Grid >
    )
}
