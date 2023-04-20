import { MAIN_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Details() {

    const itemImages = [
        {
            image: '/assets/furniture/items/chair.png',
        },
        {
            image: '/assets/furniture/items/chair.png',
        },
        {
            image: '/assets/furniture/items/chair.png',
        },
        {
            image: '/assets/furniture/items/chair.png',
        },
    ]

    return (


        <Grid container mt={10} justifyContent="center" bgcolor={MAIN_COLOR} p={7}>



            <Grid container lg={6} sm={6} justifyContent="center" bgcolor="">

                <Grid container xs={12} lg={7} justifyContent="center"
                    sx={{
                        boxShadow: { lg: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 2px -1px' },
                        borderRadius: { xs: 0, lg: 1 },
                        bgcolor: { xs: '', sm: '', mg: "", lg: "#ffff" }
                    }}
                >

                    <Grid item
                        component="img"
                        sx={{ pt: { xs: 1, lg: 2 } }}
                        lg={8} sm={6} xs={8}
                        alt="The house from the offer."
                        src="/assets/furniture/items/chair.png"
                    />

                </Grid>

                <Grid container lg={7} sm={6} xs={8} bgcolor="" justifyContent="space-around">


                    {
                        itemImages.map((data: any, index: any) =>

                            <Box key={index}
                                component="img"
                                sx={{
                                    mt: { xs: 0, lg: 3 },
                                    height: 70,
                                    width: 70,
                                    background: '#ffff',
                                    border: '#ffff',
                                    borderRadius: 0.5,
                                    boxShadow: { lg: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 2px -1px' },
                                    maxHeight: { xs: 40, md: 167 },
                                    maxWidth: { xs: 40, md: 250 },
                                }}
                                alt="items"
                                src={data.image}
                            />

                        )
                    }


                </Grid>

            </Grid>

            <Grid container lg={6} sm={6} bgcolor={MAIN_COLOR}>

                <Grid container lg={7} sm={6} justifyContent=""  >
                    \xcm
                </Grid>

            </Grid>

        </Grid>








    )
}
