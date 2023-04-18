import { MAIN_C0LOUR } from '@/utils/colors'
import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Items() {

    const items = [
        {
            item: '1',
            color: 'red'
        },
        {
            item: '2',
            color: 'blue'
        },
        {
            item: '2',
            color: 'green'
        },
        {
            item: '1',
            color: 'yellow'
        },
        {
            item: '1',
            color: 'orange'
        },
        {
            item: '1',
            color: 'green'
        },
        {
            item: '1',
            color: 'orange'
        },
        {
            item: '1',
            color: 'green'
        },
    ]

    return (
        <Grid container justifyContent="center" bgcolor={MAIN_C0LOUR} sx={{}} >



            <Grid container sx={{
                bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' }
            }}>

                {
                    items.map((item: any, index: any) =>

                        <Grid key={index} container xs={6} md={4} lg={3} justifyContent='center' bgcolor="" >

                            <Box sx={{
                                width: { xs: 200, lg: 300 },
                                height: { xs: 250, lg: 400 },

                                bgcolor: 'blue',
                                m: 2,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                xlvmb
                            </Box>

                        </Grid>

                    )
                }

            </Grid>




        </Grid >
    )
}

// <Grid container >
//     {
//         items.map((data: any, index: any) =>

//             <Grid container bgcolor={data.color} key={index} xs={6} md={4} lg={3} sx={{}} >

//                 {data.item}

//             </Grid>

//         )
//     }
// </Grid>