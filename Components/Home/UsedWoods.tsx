import { MAIN_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react'

export default function UsedWoods() {

    const woodTypes = [

        {
            imageName: '',
            image: 'assets/home/wood/img-1.png',
            description: ''
        },
        {
            imageName: '',
            image: 'assets/home/wood/img-2.png',
            description: ''
        },
        {
            imageName: '',
            image: 'assets/home/wood/img-3.png',
            description: ''
        },
        {
            imageName: '',
            image: 'assets/home/wood/img-4.png',
            description: ''
        },

    ]

    return (
        <Grid item container justifyContent="center" sx={{
            mt: { xs: 3, lg: 10 },
            bgcolor: MAIN_COLOR,
            p: 3,
        }}>

            <Grid item container bgcolor="white" lg={10}
                justifyContent="center" alignItems="center" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: 1 }}>

                {woodTypes.map((data: any, index: number) =>

                    <Grid item container justifyContent="center" p={3} xs={6} md={3} key={index} >

                        <img
                            width="60%"
                            src={data.image}
                            alt="xkmnfkj"
                        />

                    </Grid>

                )}

            </Grid>


        </Grid>

    )
}
'assets/home/wood/img-1.png'