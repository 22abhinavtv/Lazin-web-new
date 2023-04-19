import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../UI/Heading/Heading'
import Description from '../Description/Description';
import { PrimaryButton } from '../Button/CustomizedButton';
import { SECONDARY_COLOR } from '@/utils/colors';
import { H2, H3, H4 } from '../Typography/Typography';

export default function ImageContent(props: any) {

    const { image, title, description } = props;

    return (

        <Grid container bgcolor="#F5F5F5" justifyContent="center" py={10}>

            <Grid container lg={10} justifyContent="center" alignItems="center">

                <Grid container justifyContent="center" md={4} sx={{ p: 2 }}>

                    <img width='80%' src={image} alt="" />

                </Grid>


                <Grid container md={6}>

                    <H2 fontFamily='Syne'>{title}</H2>

                    <Typography variant='body1' fontWeight="semibold" sx={{
                        my: 3,
                        color: "grey"
                    }}>{description}</Typography>


                    <PrimaryButton px={6} bgcolor={SECONDARY_COLOR} >Explore Now</PrimaryButton>


                </Grid >

                <Grid container xs={5} md={2} justifyContent="center" alignItems="end" bgcolor="">

                    <img width="60%" alt="The house from the offer." src="/assets/home/banner/shape-2.png" />

                </Grid>

            </Grid>

        </Grid >
    )
}