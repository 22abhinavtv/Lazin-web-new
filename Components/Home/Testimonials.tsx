import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { H2, H5 } from '../UI/Typography/Typography';


export const Testimonials = () => {

    return (

        <Grid container justifyContent="center" sx={{ bgcolor: "white", py: 4 }}>


            <Grid container justifyContent="center">

                <H2 fontFamily="Syne" textAlign="center">What Clients Says</H2>

                <Box sx={{ width: "300px", height: "3px", bgcolor: "black", my: 2 }}></Box>

            </Grid>


            <H5 width="40%" textAlign="center">
                The extent of our firm size of our global interor design extends and long standing
                accosication with sellers in designing
            </H5>


            <Grid md={11} container>

                <Slider />

            </Grid>


        </Grid>

    )
}


const Slider = () => {

    const swiperItems = [

        {
            name: "client",
            image: '/assets/home/projects/project-1.png'
        },
        {
            name: "client",
            image: '/assets/home/projects/project-2.png'
        },
        {
            name: "client",
            image: '/assets/home/projects/project-3.png'
        },
        {
            name: "client",
            image: '/assets/home/projects/project-4.png'
        },
        {
            name: "client",
            image: '/assets/home/projects/project-3.png'
        },
        {
            name: "client",
            image: '/assets/home/projects/project-4.png'
        },


    ]


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1536: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {swiperItems.map((data: any, index: any) =>

                    <SwiperSlide>

                        <Grid container justifyContent="center" sx={{
                            py: 4,
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
                        }}>

                            <Box sx={{ width: "100px", height: "100px", borderRadius: "100%" }}>

                                <img style={{ borderRadius: "100%" }} src={data.image} alt="" />

                            </Box>


                            <Typography variant='h5' sx={{ width: "100%", fontWeight: "bold", my: 3 }}>{data.name}</Typography>


                            <Typography>Lorem ipsum dolorsit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor
                                incididunt .</Typography>

                        </Grid>


                    </SwiperSlide>

                )}

            </Swiper >
        </>
    );
}
