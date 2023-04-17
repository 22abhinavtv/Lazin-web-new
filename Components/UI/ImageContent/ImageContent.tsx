import { Button, Grid } from '@mui/material';
import React from 'react';
import Heading from '../../UI/Heading/Heading'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import Description from '../Description/Description';

export default function ImageContent(props: string) {



    return (
        <Grid container
            bgcolor="#F5F5F5"
            justifyContent="center" sx={{
                pt: { xs: 2, sm: 2, md: 4, lg: '' },
                pb: { xs: 1, sm: 1, md: 2, lg: 4 },
                //bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' }
            }}>

            <Grid height='' container lg={12} bgcolor="" justifyContent="space-around" flexDirection={props.direction}>

                <Grid container xs={12} sm={12} md={12} lg={6} sx={{
                    bgcolor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3
                    //bgcolor: { xs: 'blue', sm: 'red', md: 'yellow', lg: 'green' }

                }}>

                    <Grid container xs={6} sm={5} lg={7}>

                        <img width='100%' src="/assets/Home/services/wood1.jpeg" alt="" />

                    </Grid>

                </Grid>



                <Grid container xs={12} sm={6} md={6} lg={6} bgcolor='' alignItems="center" justifyContent="space-between" sx={{ p: 3 }}>

                    <Heading
                        heading="A catelogue with the best of modern design" />
                        
                    <Grid>

                        <Description

                            lg='10'

                            description='Answer. While there is no official minimum font size for the web, it is generally agreed upon that 16px for body text is a good 
                            starting point. Of course, some text will be smaller and headings will often times be larger. But, '
                        />

                    </Grid>

                    <Grid container justifyContent="center">

                        <ButtonComponent
                            value="Explore Now"
                        />

                    </Grid>

                </Grid>

            </Grid>



        </Grid>
    )
}