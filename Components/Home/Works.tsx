import Description from '@/Components/UI/Description/Description';
import { MAIN_COLOR } from '@/utils/colors'
import Heading from '../UI/Heading/Heading';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Grid, Typography } from "@mui/material";
import { SECONDARY_COLOR } from "@/utils/colors";
import { OutlinedButton } from '../UI/Button/CustomizedButton';
import { H2, H5 } from '../UI/Typography/Typography';

export default function Works() {

    return (
        <Grid container justifyContent="center" bgcolor={MAIN_COLOR} py={10}>

            <Grid container lg={11} pb={4}>


                <H2 fontFamily="Syne" textAlign="start">few of our latest creations</H2>


                <H5 width="60%" textAlign="start">
                    The extent of our firm size of our global interor design extends and <br />
                    long standing accosication with sellers in designing
                </H5>

            </Grid>

            <Grid md={11} container  >

                <Slider />

            </Grid>


        </Grid>
    )
}






const Slider = () => {

    const swiperItems = [

        {
            title: "Bed Room",
            image: '/assets/home/projects/project-1.png'
        },
        {
            title: "Dinning Room",
            image: '/assets/home/projects/project-2.png'
        },
        {
            title: "Living Room",
            image: '/assets/home/projects/project-3.png'
        },
        {
            title: "Bathroom",
            image: '/assets/home/projects/project-4.png'
        },
        {
            title: "Bed Room",
            image: '/assets/home/projects/project-1.png'
        },
        {
            title: "Dinning Room",
            image: '/assets/home/projects/project-2.png'
        },
        {
            title: "Living Room",
            image: '/assets/home/projects/project-3.png'
        },
        {
            title: "Bathroom",
            image: '/assets/home/projects/project-4.png'
        },


    ]


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}

                modules={[Pagination]}
                className="mySwiper"
            >

                {swiperItems.map((data: any, index: any) =>

                    <SwiperSlide>

                        <Grid container justifyContent="start">

                            <img src={data.image} alt="" />

                            <Typography sx={{
                                width: "100%", fontFamily: 'Syne',
                                mx: 2, mt: 2, textAlign: "start"
                            }}>{data.title}</Typography>

                            <OutlinedButton m={2} bgcolor={SECONDARY_COLOR} >See Full Project</OutlinedButton>

                        </Grid>


                    </SwiperSlide>

                )}

            </Swiper>
        </>
    );
}
