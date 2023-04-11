import { MAIN_C0LOUR } from '@/utils/colors'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Heading(props: string) {

    return (
        <Grid>
            <Typography sx={{
                fontSize: { xs: '18pt', sm: '22pt', md: '26pt', lg: '30pt' },
                pt: { xs: 1, sm: 1, md: 2, lg: 3 },
                fontFamily: "Rubik,sans-serif",
                fontWeight: 600, textAlign: 'center'
            }}
            >{props.heading}</Typography>
        </Grid>
    )
}
``