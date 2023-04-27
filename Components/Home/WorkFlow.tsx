import Description from '@/Components/UI/Description/Description';
import { MAIN_COLOR } from '@/utils/colors';
import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { H2, H4, H5, H6 } from '../UI/Typography/Typography';

export default function WorkFlow() {

    const serviceItems = [
        {
            image: '/assets/home/projects/project-1.png',
            title: 'Discuss',
            discription: '',
        },
        {
            image: '/assets/home/projects/project-1.png',
            title: 'Decide',
            discription: '',
        },
        {
            image: '/assets/home/projects/project-1.png',
            title: 'Design',
            discription: '',
        },
        {
            image: '/assets/home/projects/project-1.png',
            title: 'Deliver',
            discription: '',
        }

    ]


    return (

        <Grid item container justifyContent="center" bgcolor={MAIN_COLOR} sx={{ py: '' }}>

            <Grid item container justifyContent="center">

                <H2 fontFamily="Syne" textAlign="center">we'll run through</H2>

                <Box sx={{ width: "30%", height: "0.1rem", borderRadius: 2, bgcolor: "black", my: { xs: 1, sm: 2, md: 3, lg: 3 } }}></Box>

            </Grid>

            <H5 width="70%" fontWeight="550" py={1} textAlign="center">
                Answer. While there is no official minimum font size for the web, it is generally agreed upon that 16px for body text is a good
                starting
            </H5>

            <Grid item lg={10} container my={5} spacing={3} p={1} sx={{}}>

                {serviceItems.map((data: any, index: any) =>

                    <Grid item container justifyContent="center" xs={6} md={3} key={index} sx={{
                        my: 3,

                    }}>

                        <Grid container pt={5} justifyContent="center" sx={{ bgcolor: "#ffff" }} >

                            <Box sx={{ width: "100px", height: "100px", borderRadius: "100%" }}>

                                <img width="100px" height="100px" style={{}} src={data.image} alt="" />

                            </Box>


                            <H4 fontFamily="Syne" textAlign="center" my={2}> {data.title}</H4>

                            <H6 textAlign="center" width="60%">Lorem ipsum dolorsit amet, consectetur adipiscing
                            </H6>

                        </Grid>


                    </Grid>

                )}

            </Grid>

        </Grid >

    )
}
