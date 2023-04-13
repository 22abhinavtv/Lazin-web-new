import { MAIN_C0LOUR } from '@/utils/colors'
import { Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Form() {

    const enquireform = [

        {
            label: "First Name"
        },
        {
            label: "Last Name"
        },
        {

            label: "Email"
        },
        {

            label: "Phone Number"
        }

    ]

    return (
        <>
            <Grid container justifyContent="center" bgcolor={MAIN_C0LOUR}>

                <Grid xs={11} lg={10} container justifyContent="center" sx={{
                    my: { xs: 2, sm: 3, lg: 5 },
                    bgcolor: "#FFFFFF",
                    borderRadius: 1,
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"
                    //bgcolor: {xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' }
                }}>


                    <Grid lg={7} container bgcolor="" justifyContent="center">

                        <Grid container sx={{
                            my: { xs: 2, sm: 3, lg: 15 },
                            mx: { xs: 2, sm: 3, lg: 5 },
                        }}>

                            {enquireform.map((data: any, index: any) =>

                                <Grid key="index" xs={12} lg={6} md={6} sx={{ p: 1 }}>

                                    <TextField sx={{
                                        width: "100%", bgcolor: '#ffff', borderColor: '#ffff',
                                    }} placeholder={data.label} />

                                </Grid>

                            )}

                            <Grid xs={12} lg={12} md={12} sm={12} sx={{ p: 1, md: { color: 'red' } }}>

                                <TextField multiline={true} rows={6}

                                    placeholder="Message"
                                    sx={{
                                        width: "100%", bgcolor: '#ffff',
                                        //border: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
                                        //borderColor: '#ffff',
                                        border: '1px solid #fefefe !important',
                                       
                                    }} />

                            </Grid>

                        </Grid>

                    </Grid>


                    <Grid lg={5} container bgcolor="" justifyContent="center" alignItems="center">

                        <Grid>
                            <Box sx={{ m: 3, cursor: 'pointer' }}
                                component="img"
                                sx={{
                                    height: 350,
                                    width: 350,
                                }}
                                alt="google map image"
                                src="/assets/map/map.jpeg"
                            />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid >
        </>

    )
}


