import Description from '@/Components/UI/Description/Description';
import Heading from '@/Components/UI/Heading/Heading';
import { MAIN_C0LOUR, SECONDARY_COLOUR } from '@/utils/colors';
import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function WorkFlow() {

    const serviceItems = [
        {
            imageUrl: '/assets/Home/woodsection/wood1.jpeg',
            title: 'Discuss',
            discription: '',
        },
        {
            imageUrl: '/assets/Home/woodsection/wood1.jpeg',
            title: 'Decide',
            discription: '',
        },
        {
            imageUrl: '/assets/Home/woodsection/wood1.jpeg',
            title: 'Design',
            discription: '',
        },
        {
            imageUrl: '/assets/Home/woodsection/wood1.jpeg',
            title: 'Deliver',
            discription: '',
        }

    ]


    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            bgcolor: MAIN_C0LOUR,
            pb: { xs: 1, sm: 1, md: 2, lg: 4 },
            pt: { xs: 2, sm: 2, md: 4, lg: 6 },
        }} >

            <Grid container justifyContent="center">

                <Heading
                    textAlign="center"
                    heading="we'll run through" />

            </Grid>


            <Grid lg={8} md={7} sm={5} sx={{

                bgcolor: SECONDARY_COLOUR,
                mt: 1,
                mb: { xs: 0.5, sm: 0.5, md: 1, lg: 1 },
                //pb: { xs: 1, sm: 1, md: 2, lg: 3 },
                pb: 0.2
            }}
            />

            <Description

                justifyContent='center'
                textAlign="center"
                lg="7"


            description='Answer. While there is no official minimum font size for the web, it is generally agreed upon that 16px for body text is a good
            starting point. Of course, some text will be smaller and headings will often times be larger. But, '
            />


            <Grid container sx={{ bgcolor: '', justifyContent: 'center' }}>

                <Grid container lg={10} sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    mt: { xs: 1, lg: 2 },
                    justifyContent: { lg: 'space-between', xs: 'space-around' },
                    // bgcolor: { xs: 'grey', sm: "blue", md: 'red', lg: 'yellow' },
                }}>

                    {
                        serviceItems.map((data: any, index: any) =>

                            <Grid container xs={5} md={5} lg={2.5} key={index} sx={{
                                m: 1,
                                bgcolor: '#ffff',
                                borderRadius: 1,
                                pb: 2,
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                            }}>

                                <Grid container sx={{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    mt: { xs: 2 }
                                }}>

                                    <img
                                        src={data.imageUrl}
                                        width="30%" sx={{}}
                                        alt="service image" />

                                </Grid>

                                <Grid container
                                    sx={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mt: { xs: 2 }
                                    }}>

                                    <Typography sx={{
                                        justifyContent: 'center',
                                        fontWeight: 600,
                                        fontSize: { xs: 18, sm: 23, md: 28, lg: 23 }
                                    }}>
                                        {data.title}
                                    </Typography>
                                </Grid>

                                <Grid container
                                    sx={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mt: { xs: 1, sm: 0.5 }
                                    }}>

                                    <Typography sx={{
                                        textAlign: "center", m: 1,
                                        width: '60%',
                                        fontSize: {
                                            xs: 14, sm: 19, md: 24, lg: 19,
                                            mt: { lg: 3 }
                                        }
                                    }}>
                                        Lorem ipsum dolorsit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt .
                                    </Typography>

                                </Grid>

                            </Grid>

                        )

                    }

                </Grid>

            </Grid >

        </Grid >

    )
}
