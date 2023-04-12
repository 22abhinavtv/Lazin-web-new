import { Grid, Box, Typography } from '@mui/material';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


export default function Slider2() {

    const testominals = [
        {
            title: "RAVI SANKAR",
            content: "OYVAA has earned an exalted place in app development history by achieving the rare trifecta of delivering a high-quality app on time, within budget, and according to spec.",
        },
        {
            title: "BARJIZ",
            content: "OYVAA has helped us enhance our brand awareness on social media platforms. They are an extremely knowledgeable marketing team providing cost-effective solutions.",
        },
        {
            title: "ASWIN",
            content: "The team developed a user-friendly and attractive website. They also helped achieve a higher ranking on Google search results. OYVAA established a smooth workflow and intelligence in their project delivery ",
        },
        {
            title: "RAVI SANKAR",
            content: "OYVAA has earned an exalted place in app development history by achieving the rare trifecta of delivering a high-quality app on time, within budget, and according to spec.",
        },
        {
            title: "BARJIZ",
            content: "OYVAA has helpedTypography us enhance our brand awareness on social media platforms. They are an extremely knowledgeable marketing team providing cost-effective solutions.",
        },
        {
            title: "ASWIN",
            content: "The team developed a user-friendly and attractive website. They also helped achieve a higher ranking on Google search results. OYVAA established a smooth workflow and intelligence in their project delivery ",
        },
    ];

    return (
        <Grid>
            <Swiper
                style={{ margin: "10px" }}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 1,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1536: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{
					clickable: true,
				}}
                modules={[Pagination]}
                className="mySwiper"
            >

                {testominals.map((data, index) => (

                    <SwiperSlide key={index}>

                        <Box sx={{
                            bgcolor: "white",
                            cursor: "pointer",
                            transition: "0.5s",
                            borderRadius: "10px",
                            boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                            mb: 10, p: 5,
                            display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center"
                        }}>

                            <FormatQuoteIcon sx={{ fontSize: "4rem", color: 'red' }} />

                            <Typography variant="subtitle1" textAlign="center" sx={{ m: 3 }}>{data.content}</Typography>

                            <Typography variant="subtitle1" fontWeight='bold'>{data.title}</Typography>

                        </Box>

                    </SwiperSlide>

                ))}

            </Swiper>

        </Grid>
    )
}
