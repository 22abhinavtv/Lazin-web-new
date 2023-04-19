import { MAIN_C0LOUR } from '@/utils/colors'
import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Items() {

    const items = [
        {
            item: '1',
            color: '#E1C7A0',
            imageUrl: '/assets/furniture/items/chair.png'
        },
        {
            item: '2',
            color: 'blue',
            imageUrl: '/assets/furniture/items/table.png'
        },
        {
            item: '2',
            color: 'green',
            imageUrl: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: 'yellow',
            imageUrl: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: 'orange',
            imageUrl: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: 'green',
            imageUrl: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: 'orange',
            imageUrl: '/assets/furniture/items/chair.png'
        },
        {
            item: '1',
            color: 'orange',
            imageUrl: '/assets/furniture/items/chair.png'
        }
    ]
    // bgcolor={MAIN_C0LOUR}
    return (
        <Grid container item justifyContent="center" sx={{
            bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' }
        }}>

            <Grid item container bgcolor="" lg={11.5}  >

                {
                    items.map((data: any, index: any) =>

                        <Grid item container key={index} xs={6} md={4} lg={3} justifyContent="center">

                            <Grid container item bgcolor={data.color} my={1} xs={10} lg={8} justifyContent="center" mt={5} sx={{
                                height: { xs: 250, sm: 400, lg: 400 }
                            }}>

                                <Box
                                    component="img"
                                    sx={{
                                        mt: { xs: 3, lg: 7 },
                                        height: 200,
                                        width: 150,
                                        maxHeight: { xs: 120, sm: 280, md: '150' },
                                        maxWidth: { xs: 80, sm: 140, md: '120' },
                                    }}
                                    alt="The house from the offer."
                                    src={data.imageUrl}
                                />

                                <Grid item container sx={{
                                    border: '2px solid red',
                                    justifyContent: 'center'
                                }}>
                                    A
                                </Grid>

                            </Grid>

                        </Grid>

                    )
                }

            </Grid>

        </Grid>
    )
}
