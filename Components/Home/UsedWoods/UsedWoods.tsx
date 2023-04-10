import { MAIN_C0LOUR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react'

export default function UsedWoods() {

    const woodTypes = [

        {
            imageName: '',
            imageSrc: '/assets/Home/woodsection/wood1.jpeg',
            description: ''
        },
        {
            imageName: '',
            imageSrc: '/assets/Home/woodsection/wood1.jpeg',
            description: ''
        },
        {
            imageName: '',
            imageSrc: '/assets/Home/woodsection/wood1.jpeg',
            description: ''
        },
        {
            imageName: '',
            imageSrc: '/assets/Home/woodsection/wood1.jpeg',
            description: ''
        },

    ]

    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            bgcolor: MAIN_C0LOUR,
            pb: { xs: 1, sm: 1, md: 2, lg: 3 },
            pt: { xs: 2, sm: 2, md: 4, lg: 6 },
        }}>
            <Grid container xs={10} lg={8} sx={{
                textAlign: 'center',
                justifyContent: 'space-around',
                bgcolor: '#ffff',
                borderRadius: 2,
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'

            }}>


                {woodTypes.map((data: any, index: number) =>

                    <Grid key={index} xs={6} lg={3} sx={{}}>

                        <Grid sx={{ p: 1 }}>

                            <img
                                width="60%"
                                src={data.imageSrc} alt=""
                            />

                        </Grid>

                    </Grid>

                )
                }

            </Grid>

        </Grid>

    )
}
