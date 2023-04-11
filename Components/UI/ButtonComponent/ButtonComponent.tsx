import { SECONDARY_COLOUR } from '@/utils/colors'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ButtonComponent(props: String) {
    return (
        <Grid>
            <Box bgcolor={SECONDARY_COLOUR} sx={{ m: 1, }}>

                <Typography sx={{
                    pt: { xs: 1, sm: 1, lg: 1.5 },
                    pb: { xs: 1, sm: 1, lg: 1.5 },
                    pl: { xs: 3, sm: 3, lg: 5 },
                    pr: { xs: 3, sm: 3, lg: 5 },
                    color: '#ffff',
                    fontWeight: 600,
                }}>{props.value}</Typography>

            </Box>
        </Grid >
    )
}
