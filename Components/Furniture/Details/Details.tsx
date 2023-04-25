import { H3, H4, H5, H6 } from '@/Components/UI/Typography/Typography';
import { MAIN_COLOR } from '@/utils/colors';
import { Avatar, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';



export default function Details() {

    const itemImages = [
        {
            image: '/assets/furniture/items/chair.png',
        },
        {
            image: '/assets/furniture/items/chair.png',
        },
        {
            image: '/assets/furniture/items/chair.png',
        },
        {
            image: '/assets/furniture/items/chair.png',
        },
    ]

    const aboutItem = [
        {
            discription: 'Dimensions: Length: 81.2 cm X Width: 101 cmX Height: 73.66 cm'
        },
        {
            discription: 'Material and Colour: Made with Pine Wood and fabric Upholstery in Charcoal Grey'
        },
        {
            discription: 'Warranty Description: 3 years against manufacturing defects'
        },
        {
            discription: 'Assembly:Seating Capacity: 1 seater'
        },

    ]

    return (

        <Grid container mt={10} justifyContent="center" bgcolor={MAIN_COLOR} p={7}>



            <Grid container lg={7} sm={6} justifyContent="center" bgcolor="">

                <Grid container xs={12} lg={7} justifyContent="center"
                    sx={{
                        boxShadow: { lg: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 2px -1px' },
                        borderRadius: { xs: 0, lg: 1 },
                        bgcolor: { xs: '', sm: '', mg: "", lg: "#ffff" }
                    }} ListItem
                >

                    <Grid item
                        component="img"
                        sx={{ pt: { xs: 1, lg: 2 } }}
                        lg={8} sm={6} xs={8}
                        alt="The house from the offer."
                        src="/assets/furniture/items/chair.png"
                    />

                </Grid>

                <Grid container lg={7} sm={6} xs={8} bgcolor="" justifyContent="space-around">


                    {
                        itemImages.map((data: any, index: any) =>

                            <Box key={index}
                                component="img"
                                sx={{
                                    mt: { xs: 0, lg: 3 },
                                    ml: { xs: .3 },
                                    height: 70,
                                    width: 70,
                                    background: '#ffff',
                                    borderRadius: 0.5,
                                    boxShadow: { lg: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 2px -1px' },
                                    maxHeight: { xs: 40, md: 50 },
                                    maxWidth: { xs: 40, md: 50 },
                                }}
                                alt="items"
                                src={data.image}
                            />

                        )
                    }


                </Grid>

            </Grid>
















            <Grid container lg={5} sm={6} bgcolor={MAIN_COLOR} sx={{
                mt: { xs: 3 }
            }}>

                <Grid container lg={7} sm={12} sx={{
                    height: 'fit-content',
                    //bgcolor: { xs: 'green', sm: 'red', md: 'blue', lg: 'pink' }
                }} >


                    <H3 fontFamily="Lexend" fontWeight='550'>Solimo Cyrog Lounge Chair </H3>

                    <H4>(Pine Wood, 1 Seater)</H4>





                    <Box sx={{
                        width: { xs: 200, lg: 400 },
                        height: "0.4px", bgcolor: "black", my: { xs: 1, lg: 4 },
                    }}></Box>






                    <H5 width="40%" fontWeight='600'>Colour</H5>
                    <H6 width="60%">Charcoal Grey</H6>


                    <H5 width="40%" fontWeight='600'>Brand</H5>
                    <H6 width="60%" >Solimo</H6>



                    <H5 width="40%" fontWeight='600'>Finish Type</H5>
                    <H5 width="60%">Wood</H5>


                    <H5 width="40%" fontWeight='600'>Room Type</H5>
                    <H5 width="60%">Living Room</H5>


                    <H5 width="40%" fontWeight='600'>Frame Material</H5>
                    <H5 width="60%">Pine Wood</H5>






                    <Box sx={{ width: "400px", height: "0.4px", bgcolor: "black", my: 4, }}></Box>











                    <H3 fontFamily="Lexend" fontWeight='550'>Solimo Cyrog Lounge Chair </H3>

                    <Box sx={{ mt: { xs: 1, lg: 3 } }}>
                        <ul>

                            {
                                aboutItem.map((data: any, index: any) =>

                                    <li key={index}>
                                        <Typography sx={{
                                            py: 0.5, fontWeight: '550',
                                            fontSize: { xs: 14 }
                                        }}>{data.discription}</Typography>
                                    </li>

                                )
                            }

                        </ul>

                    </Box>





                </Grid>

            </Grid>

        </Grid >








    )
}
