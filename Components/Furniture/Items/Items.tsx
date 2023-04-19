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
        <Grid container   item bgcolor="red" justifyContent="center" >

            <Grid item container  >

                {
                    items.map((data: any, index: any) =>

                        <Grid item container key={index} bgcolor={data.color} xs={6} md={4} lg={3} justifyContent="center"   >

                            fdskjg

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