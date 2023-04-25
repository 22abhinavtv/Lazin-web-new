import { SECONDARY_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import React from 'react'
import { OutlinedButton } from '../UI/Button/CustomizedButton'
import { H6 } from '../UI/Typography/Typography'

export default function Section2() {
    return (
        <Grid container justifyContent="center">

            <Grid container lg={10} m={2}>

                <Grid container justifyContent="center" lg={6}>

                    <Grid container xs={9} lg={11}
                        component="img"
                        alt="The house from the offer."
                        src="assets/gallery/sectionImage/Pizzeria 1.png"
                    />

                </Grid>

                <Grid lg={6} container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>

                    <H6 textAlign="center" width="60%" fontWeight="550" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut optio atque soluta cum reprehenderit quo! Consequatur distinctio officiis sint recusandae, minima officia? Deleniti, ex repellendus. Tempora error repudiandae esse?
                    </H6>

                    <Grid container justifyContent="center">
                        <OutlinedButton m={2} bgcolor={SECONDARY_COLOR} >More Images </OutlinedButton>
                    </Grid>


                </Grid>

            </Grid>



        </Grid>
    )
}
