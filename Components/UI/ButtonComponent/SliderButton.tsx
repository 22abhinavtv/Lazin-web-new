import { SECONDARY_COLOUR } from '@/utils/colors'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function SliderButton(props) {
    return (
        <Grid>
            <Box bgcolor={SECONDARY_COLOUR} sx={{
                m: 1,
                cursor: 'pointer'
            }}>

                <Typography sx={{
                    pt: { xs: 0.5, sm: 0.5, lg: 1 },
                    pb: { xs: 0.5, sm: 0.5, lg: 1 },
                    pl: { xs: 1, sm: 1, lg: 2 },
                    pr: { xs: 1, sm: 1, lg: 2 },
                    color: '#ffff',
                    borderColor:'#ffff',
                    fontWeight: 600,
                }}>{props.value}</Typography>

            </Box>
        </Grid >
    )
}
