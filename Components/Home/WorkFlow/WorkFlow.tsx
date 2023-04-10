import Description from '@/Components/UI/Description/Description';
import Heading from '@/Components/UI/Heading/Heading';
import { MAIN_C0LOUR, SECONDARY_COLOUR } from '@/utils/colors';
import { Divider, Grid } from '@mui/material';
import React from 'react';

export default function WorkFlow() {
    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            bgcolor: MAIN_C0LOUR,
            pb: { xs: 1, sm: 1, md: 2, lg: 3 },
            pt: { xs: 2, sm: 2, md: 4, lg: 6 },
        }} >

            <Heading name="we'll run through" />

            <Grid lg={8} md={7} sm={5} sx={{

                bgcolor: SECONDARY_COLOUR,
                mt: 1,
                mb: { xs: 0.5, sm: 0.5, md: 1, lg: 1 },
                //pb: { xs: 1, sm: 1, md: 2, lg: 3 },
                pb: 0.2
            }}
            />

            <Description
                description='Answer. While there is no official minimum font size for the web, it is generally agreed upon that 16px for body text is a good 
                starting point. Of course, some text will be smaller and headings will often times be larger. But, '
            />

        </Grid >
    )
}
