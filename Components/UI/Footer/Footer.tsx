import { Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/router';
import { SECONDARY_COLOR } from '@/utils/colors';

export default function Footer() {
  const router = useRouter();

  const footerData = [
    {
      id: 1,
      main_title: "About",
      children: [
        {
          sub_title: "About Us",
          path: "/aboutus"
        },
        {
          sub_title: "Featurs",
          path: "/aboutus"
        },
        {
          sub_title: "News",
          path: "/aboutus"
        },
        {
          sub_title: "Careers",
          path: "/aboutus"
        },
      ]
    },
    {
      id: 2,
      main_title: "Company",
      children: [
        {
          sub_title: "Our Team",
          path: "policies/privacypolicies"
        },
        {
          sub_title: "Partner With Us",
          path: "policies/termsandcondition"
        },
        {
          sub_title: "FAQ",
          path: "policies/editorialpolicies"
        },
        {
          sub_title: "Blog",
          path: "policies/editorialpolicies"
        },
      ]
    },
    {
      id: 3,
      main_title: "Support",
      children: [
        {
          sub_title: "Account",
          path: "policies/privacypolicies"
        },
        {
          sub_title: "Support Center",
          path: "policies/termsandcondition"
        },
        {
          sub_title: "Feedback",
          path: "policies/editorialpolicies"
        },
        {
          sub_title: "Assesibility",
          path: "policies/editorialpolicies"
        },
      ]
    },
    {
      id: 4,
      main_title: "Adress",
      children: [
        {
          sub_title: "Adress",
          path: "policies/privacypolicies"
        },
        {
          sub_title: "Phone",
          path: "policies/termsandcondition"
        },
        {
          sub_title: "email",
          path: "policies/editorialpolicies"
        },
      ]
    },

  ];

  return (
    <Grid container bgcolor={SECONDARY_COLOR} sx={{
      color: '#ffff', alignItems: 'center',
      //mt: 10
    }}>

      <Grid bgcolor='red' container lg={12} sx={{ py: 7, bgcolor: '' }}>

        <Grid container justifyContent="center" alignItems="center" lg={3} sx={{}} >

          <Typography
            sx={{
              width: "100%", textAlign: "center",
              fontSize: { xs: 15, sm: 20, lg: 18 },
              fontWeight: 600,
              pb: { xs: 2, md: 0 }
            }}>The extent of our firm size of our global <br /> interor design extends</Typography>

          {[{
            icon: FacebookIcon,
            color: "dodgerblue",
            path: ""
          }, {
            icon: InstagramIcon,
            color: "red",
            path: ""
          }, {
            icon: LinkedInIcon,
            color: "dodgerblue",
            path: ""
          },
          ].map((data: any, index: any) =>

            <a key={index} href={data.path}>

              <data.icon sx={{
                color: "white", mr: 2,
                fontSize: { xs: 30, sm: 40 },
                cursor: "pointer", '&:hover': {

                  color: data.color

                }
              }}>
              </data.icon>

            </a>

          )}

        </Grid>

        <Grid container lg={9} justifyContent="space-around">

          {
            footerData.map((data: any, index: any) =>

              <Grid xs={6} sm={3} lg={3} container justifyContent="space-between" key={index} >

                <Typography variant='h6' sx={{
                  width: "100%", fontWeight: "bold", color: "white",
                  fontSize: { xs: 18, sm: 25, lg: 23 },
                  mt: { xs: 2 },
                  textAlign: { xs: "center" }


                }}>{data.main_title}</Typography>

                {data.children.map((child: any, index: any) =>

                  <Typography key={index} sx={{
                    width: "100%", color: "white",
                    fontSize: { xs: 15, sm: 20 },
                    mt: 0.5,
                    ml: { xs: '' },
                    cursor: 'pointer',
                    textAlign: { xs: "center" }

                  }} onClick={() => router.push(child.path)} >{child.sub_title}</Typography>

                )}

              </Grid>

            )}

        </Grid>

      </Grid>

      <Grid container sx={{ justifyContent: 'center', pb: 7 }}>

        <Grid sx={{ width: '82%', height: '0.1rem', bgcolor: "#CB634A", mt: 2, }}></Grid>

      </Grid>

    </Grid >
  )
} 