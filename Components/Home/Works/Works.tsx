import Description from '@/Components/UI/Description/Description';
import { MAIN_C0LOUR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react';
import Heading from '../../UI/Heading/Heading'

export default function Works() {
    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            bgcolor: MAIN_C0LOUR,
            pb: { xs: 1, sm: 1, md: 2, lg: 4 },
            pt: { xs: 2, sm: 2, md: 4, lg: 4 },
        }}>

            <Grid container lg={11} bgcolor=''>

                <Heading heading='few of our latest creations' />


                <Description

                    justifyContent='start'
                    textAlign="start"
                    lg='5'

                    description="The extent of our firm size of our global interor design extends and
                            long standing accosication with sellers in designing"
                />

                <Grid container bgcolor='red' sx={{}}>
                    lgkmbk
                </Grid>


            </Grid>




        </Grid>
    )
}
