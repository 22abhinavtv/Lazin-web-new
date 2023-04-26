import { SECONDARY_COLOR } from '@/utils/colors'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { H2 } from '../UI/Typography/Typography'

export default function Banner() {
    return (
        <Grid container alignItems="center" sx={{ py: 10 }}>

            <Grid width="33%" bgcolor="" alignItems="flex-end">

                <Box width="100%"
                    sx={{
                        height: { xs: "0.2rem", sm: "0.2rem", lg: "0.3rem" },
                        borderRadius: 6
                    }}
                    bgcolor={SECONDARY_COLOR} />

            </Grid>

            <Grid width="33%" bgcolor="" justifyContent="center" alignItems="center">
                <H2 textAlign="center" fontWeight="600">Project Name</H2>
            </Grid>

            <Grid width="33%" bgcolor="red">

                <Box width="100%"
                    sx={{
                        height: { xs: "0.2rem", sm: "0.2rem", lg: "0.3rem" },
                        borderRadius: 6
                    }}
                    bgcolor={SECONDARY_COLOR} />

            </Grid>

        </Grid>
    )
}
