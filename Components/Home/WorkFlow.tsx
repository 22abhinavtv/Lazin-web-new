import Description from '@/Components/UI/Description/Description';
import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { H2, H4, H5 } from '../UI/Typography/Typography';

export default function WorkFlow() {

    const serviceItems = [
        {
            image: '/assets/home/woodsection/wood1.jpeg',
            title: 'Discuss',
            discription: '',
        },
        {
            image: '/assets/home/woodsection/wood1.jpeg',
            title: 'Decide',
            discription: '',
        },
        {
            image: '/assets/home/woodsection/wood1.jpeg',
            title: 'Design',
            discription: '',
        },
        {
            image: '/assets/home/woodsection/wood1.jpeg',
            title: 'Deliver',
            discription: '',
        }

    ]


    return (

        <Grid container justifyContent="center" sx={{ py: 5 }}>


            <Grid container justifyContent="center">

                <H2 fontFamily="Syne" textAlign="center">we'll run through</H2>

                <Box sx={{ width: "300px", height: "3px", bgcolor: "black", my: 2 }}></Box>

            </Grid>


            <H5 width="60%" textAlign="center">Answer. While there is no official minimum font size for the web, it is generally agreed upon that 16px for body text is a good
                starting point. Of course, some text will be smaller and headings will often times be larger. But, '
            </H5>



            <Grid container sx={{ bgcolor: '', justifyContent: 'center' }}>

                {serviceItems.map((data: any, index: any) =>

                    <Grid container justifyContent="center" md={3} key={index} sx={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                    }}>


                        <img
                            src={data.image}
                            width="30%"
                            alt="service image" />


                        <H4 fontFamily="Syne" textAlign="center" my={1}> {data.title}</H4>

                        <H5 textAlign="center" my={1}>Lorem ipsum dolorsit amet, consectetur adipiscing
                            elit,sed do eiusmod tempor incididunt .
                        </H5>



                    </Grid>

                )}

            </Grid>

        </Grid >

    )
}
