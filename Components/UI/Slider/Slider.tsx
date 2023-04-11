import { Grid, Typography } from '@mui/material';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box } from '@mui/system';
import { MAIN_C0LOUR } from '@/utils/colors';
import SliderButton from '../ButtonComponent/SliderButton';

export default function Slider() {

    const swiperItems = [
        {
            title: "Bed Room",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Dinning Room",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Living Room",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bathroom",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bathroom",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bathroom",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bed Room",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Dinning Room",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Living Room",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bathroom",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bathroom",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        },
        {
            title: "Bathroom",
            imageUrl: '/assets/Home/woodsection/wood1.jpeg'
        }
    ]

    return (

        <Grid container justifyContent='center'>
            <Grid container lg={11} bgcolor={MAIN_C0LOUR} justifyContent='center' sx={{}}>
                <Swiper
                    slidesPerView={6}
                    // spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >

                    {
                        swiperItems.map((data: any, index: any) =>

                            <Grid key={index} container bgcolor={MAIN_C0LOUR}>

                                <SwiperSlide >

                                    <Grid sx={{ pb: 7 }} container bgcolor="">

                                        <Grid sx={{
                                            bgcolor: 'blue',
                                            width: { xs: 260, lg: 250 },
                                            height: { xs: 150, lg: 350 },
                                            backgroundImage: `url('${data.imageUrl}')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '100% 100%'
                                        }} />

                                        <Grid container>
                                            <Typography sx={{
                                                pl: { xs: 1, lg: 1.5 },
                                                pt: 1,
                                                fontSize: { lg: 20 },
                                                color: '#000000',
                                                fontWeight: 540
                                            }}>{data.title}</Typography>
                                        </Grid>


                                        <Grid container sx={{}}>

                                            <SliderButton value="See Full Project" />

                                        </Grid>

                                    </Grid>

                                </SwiperSlide>

                            </Grid>
                        )
                    }

                </Swiper>
            </Grid >
        </Grid >
    )
}





{/* <Grid container justifyContent="center" sx={{}}>

                                        <img
                                            width="70%"
                                            src={data.imageUrl} alt=""
                                        />

                                    </Grid> */}