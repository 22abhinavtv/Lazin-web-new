import { Box, Grid } from '@mui/material'
import React from 'react'
import { H2, H6 } from '../UI/Typography/Typography'

export default function Section() {


    const contentItems = [
        {
            type: 'Bed Room',
            ImageUrl : 'a'
        }
    ]


    return (
        <Grid container justifyContent="center" overflow='hidden' sx={{
            mx: { xs: 5, lg: 15 }, p: { lg: 4 }
        }}  >


            <Grid container>

                <Grid container sm={6} lg={7} sx={{
                    //  bgcolor: { xs: "red", sm: 'blue', md: 'green', lg: 'pink' }
                }} justifyContent="center">

                    <Grid xs={12} sm={5} md={10} lg={8} component="img"
                        sx={{
                            // height: 400,
                            // width: 700,

                        }}
                        alt="The house from the offer."
                        src="assets/"
                    />

                </Grid>

                <Grid container sm={6} lg={5} sx={{
                    // bgcolor: { xs: "red", sm: 'blue', md: 'green', lg: 'pink' }
                }} justifyContent="center">

                    <H2 textAlign="center" py={2} fontWeight="600" height="fit-content">Bed Room</H2>

                    <H6 width="90%" fontWeight="550" textAlign="center" height="fit-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ducimus quos cupiditate doloremque, amet dolorem nesciunt culpa, exercitationem nostrum voluptatum perspiciatis minus saepe explicabo velit praesentium illo adipisci optio iure?
                    </H6>
                </Grid>

            </Grid>








        </Grid>
    )
}
