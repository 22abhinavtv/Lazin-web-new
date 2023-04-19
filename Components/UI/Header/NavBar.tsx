import { MAIN_COLOR } from '@/utils/colors';
import { Box, Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react';
//import Logo from '../../../public/assets/logo/logo.png'

export const NavBar = () => {

    const router = useRouter();

    const navbarItems = [
        {
            title: 'Home',
            path: "/"
        },
        {
            title: 'Furniture',
            path: "/furniture"
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Project',
            path: '/project'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Contact Us',
            path: '/contactus'
        }
    ]

    return (
        <Grid bgcolor={MAIN_COLOR}
            container alignItems="center" sx={{
                position: 'fixed', top: 0, left: 0, zIndex: "100",
                display: { xs: 'none', md: 'flex' }
            }}>

            <Grid container md={4} lg={6}>

                <Box
                    onClick={() => router.push('/')}
                    style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{
                        ml: 4,
                        p: 2,
                        height: 50,
                        width: 100,
                    }}
                    alt="The house from the offer."
                    src="/assets/logo/logo.png"
                />

            </Grid>

            <Grid bgcolor='' container sx={{}} md={8} lg={6}>

                <Grid container sx={{ justifyContent: "space-around", alignItems: 'center' }}>

                    {
                        navbarItems.map((data: any, index: any) =>

                            <Typography

                                sx={{
                                    fontWeight: router.asPath === data.path ? "bold" : "normal",
                                    fontFamily: 'Noto Sans'
                                }}

                                key={index}
                                style={{ cursor: 'pointer' }}
                                onClick={() => router.push(data.path)}

                            >{data.title}</Typography>
                        )
                    }

                </Grid>

            </Grid>

        </Grid >
    )
}
