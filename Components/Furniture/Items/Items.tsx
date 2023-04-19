import { MAIN_COLOR } from '@/utils/colors'
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
        <Grid container item bgcolor="  " justifyContent="center" >

            <Grid item container bgcolor="red" lg={11 }  >
            {/* mx={4} */}
                {
                    items.map((data: any, index: any) =>

                        <Grid item container key={index} xs={6} md={4} lg={3} justifyContent="center">

                            <Grid container item bgcolor="pink" my={1} xs={10} lg={10} justifyContent="center">

                                ftjh
                                
                            </Grid>

                        </Grid>

                    )
                }

            </Grid>

        </Grid>
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