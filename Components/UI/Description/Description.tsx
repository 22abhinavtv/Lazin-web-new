import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Description(props: any) {
    return (

        <Grid container
            justifyContent={props.justifyContent}
            sx={{
                //bgcolor: { xs: 'red', sm: 'blue', md: 'pink', lg: 'green' },
                mt: { xs: 1, sm: 1.5, lg: 2 },
                mb: { xs: 1, sm: 1.5, lg: 2 }
            }}>

            <Grid container xs={11} sm={11} md={12} lg={props.lg} bgcolor="" sx={{}}>

                <Typography sx={{
                    textAlign: props.textAlign,
                    fontSize: { xs: '10pt', sm: '14pt', md: '17pt', lg: '17pt' },
                    lineHeight: 1.4,
                    fontWeight: 550
                }}>
                    {props.description}
                </Typography>

            </Grid>

        </Grid>

    )
}
