import { H4 } from '@/Components/UI/Typography/Typography'
import { MAIN_COLOR, SECONDARY_COLOR } from '@/utils/colors'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Items() {

    const items = [
        {
            item: '1',
            color: '#F8EAD8',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '2',
            color: '#F8F4EA',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '2',
            color: '#F5EBE0',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: '#FFEBAD',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: '#E9DAC1',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: '#F7EDDB',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: '#F8F4EA',
            image: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: '#F8EAD8',
            image: '/assets/furniture/items/chair.png'
        }
    ]
    // bgcolor={MAIN_C0LOUR}
    return (
        <Grid item container justifyContent="center" sx={{
            bgcolor: "white", py: 10,
        }}>

            <Grid item container lg={11} spacing={4} p={1}>

                {items.map((data: any, index: any) =>

                    <Grid item container key={index} xs={6} md={4} lg={3} justifyContent="center">

                        <Grid item container sx={{ bgcolor: data.color, p: 5 }}>

                            <img width="100%" src={data.image} />

                        </Grid>

                        <H4 mt={1}>Interior Name</H4>

                        <H4 mt={1}>Details</H4>

                    </Grid>


                )}

            </Grid>

        </Grid >
    )
}