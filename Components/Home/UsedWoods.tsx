import { MAIN_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react'

export default function UsedWoods() {

    const woodTypes = [

        {
            imageName: '',
            image: '/assets/Home/wood/img-1.png',
            description: ''
        },
        {
            imageName: '',
            image: '/assets/Home/wood/img-2.png',
            description: ''
        },
        {
            imageName: '',
            image: '/assets/Home/wood/img-3.png',
            description: ''
        },
        {
            imageName: '',
            image: '/assets/Home/wood/img-4.png',
            description: ''
        },

    ]

    return (
        <Grid item container justifyContent="center" sx={{
            bgcolor: MAIN_COLOR,
            py: 4,
        }}>

            <Grid item container bgcolor="white" lg={10}
                justifyContent="center" alignItems="center" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>

                {woodTypes.map((data: any, index: number) =>

                    <Grid item container justifyContent="center"
                        p={3}
                        xs={6}
                        md={3} key={index} >

                        <img
                            width="50%"
                            src={data.image} alt=""
                        />

                    </Grid>

                )}

            </Grid>


        </Grid>

    )
}
