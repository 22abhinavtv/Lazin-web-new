import { MAIN_COLOR } from '@/utils/colors'
import { Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const index = () => {


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

        <Grid container justifyContent="center" bgcolor={MAIN_COLOR}>

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
                                    width: "100%", bgcolor: '#ffff',
                                    borderColor: '#ffff',
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"

                                }} placeholder={data.label} />

                            </Grid>

                        )}

                        <Grid xs={12} lg={12} md={12} sm={12} sx={{ p: 1, md: { color: 'red' } }}>

                            <TextField multiline={true} rows={6}

                                placeholder="Message"
                                sx={{
                                    width: "100%", bgcolor: '#ffff',
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
                                }} />

                        </Grid>

                        <Grid></Grid>

                    </Grid>

                </Grid>


                <Grid lg={5} container bgcolor="" justifyContent="center" alignItems="center">

                    <Grid>
                        <Box sx={{
                            m: 3, mb: 3, cursor: 'pointer', height: { lg: 350 },
                            width: { lg: 350 },
                        }}
                            component="img"

                            alt="google map image"
                            src="/assets/map/map.jpeg"
                        />
                    </Grid>

                </Grid>

            </Grid>

        </Grid >

    )
}

export default index
