import { Grid, } from '@mui/material'
import React from 'react'
import { H2, H6, H3 } from '../UI/Typography/Typography'


export default function About() {
    return (
        <Grid container justifyContent="center" sx={{ m: { lg: 5 } }}>

            <Grid container bgcolor="" alignItems="center" lg={3} >

                <H3 width="40%" fontWeight="600" mx={4} lineHeight={1.3}>
                    About our team
                </H3>

            </Grid>

            <Grid container bgcolor="" lg={9}  >

                <H2  fontWeight="600" >About us</H2>

                <H6 py={2} fontWeight="550" width="70%"  sx={{ py: 2 }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure commodi maiores amet velit. Ut, voluptates hic. Quo commodi,
                    recusandae ab, deserunt sit quae provident,
                    omnis esse in doloremque eos. Voluptates?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ut adipisci repellendus, ipsam reprehenderit voluptatem reiciendis deleniti labore dolorem rerum quibusdam eum nisi veniam quaerat nam. Est alias maiores earum?
                </H6>

                <H6 py={2} fontWeight="550" width="70%" sx={{ py: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde ad? Reiciendis repellendus exercitationem beatae sunt veritatis! Quo, vitae consequatur. Enim atque eligendi dolor voluptatum nihil, repellat minima quae unde.
                </H6>

            </Grid>
        </Grid>
    )
}
