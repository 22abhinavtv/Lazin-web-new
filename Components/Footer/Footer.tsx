import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/navigation';
import { footerData } from './helper';

export const Footer = () => {

	const router = useRouter();



	return (

		<Grid container justifyContent="space-between" sx={{ bgcolor: "white", pt: 5 }}>

			<Grid container lg={12} sx={{ justifyContent: "space-between", pt: 5, pb: 10 }}>

				<Grid container sm={12} md={4} lg={4} >

					<Box sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center", alignItems: "center"
					}}>

						<img style={{ margin: "15px 0" }} width="150px" src={"/assets/logo/logo.png"} />


						<Typography sx={{ color: "black", my: 1 }}>Social Links</Typography>

						<Box display="flex" sx={{ my: 3 }}>

							{[{
								icon: FacebookIcon,
								color: "dodgerblue",
								path: "https://www.facebook.com/profile.php?id=100089068316908&mibextid=ZbWKwL"
							}, {
								icon: InstagramIcon,
								color: "red",
								path: "https://www.instagram.com/oyvaatechnologies/?hl=en"
							}, {
								icon: LinkedInIcon,
								color: "dodgerblue",
								path: "https://www.linkedin.com/company/oyvaa"
							},
							].map(data =>

								<a href={data.path}>

									<data.icon sx={{
										color: "black", mr: 2, fontSize: "1.8rem", cursor: "pointer", '&:hover': {

											color: data.color
										}
									}}>
									</data.icon>

								</a>

							)}

						</Box>

					</Box>

				</Grid>


				<Grid container sm={12} md={4} lg={8}>

					{footerData.map(data =>

						<Grid xs={12} sm={12} lg={4} sx={{ p: 2 }}>

							<Typography variant='h6' sx={{ fontWeight: "bold", color: "black", mb: 1 }}>{data.main_title}</Typography>

							{data.children.map(child =>

								<Typography sx={{ color: "black", mb: 1 }} variant='subtitle1' onClick={() => router.push(child.path)} >{child.sub_title}</Typography>

							)}

						</Grid>

					)}

				</Grid>

			</Grid >

			<Grid container justifyContent="center" sx={{ p: 2 }}>

				<Typography sx={{ fontSize: "0.8rem", color: "black" }}><b>© 2023 Lazin Interio.</b> All rights reserved.</Typography>

			</Grid>

		</Grid >
	)
}
