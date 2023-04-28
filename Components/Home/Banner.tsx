import { MAIN_COLOR } from '@/utils/colors'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { H3, H4, H5 } from '../UI/Typography/Typography'

export default function Banner() {

    const bgImage = '/assets/home/banner/banner.jpeg'


    return (
        <Grid container
            //mt={10}
            bgcolor={MAIN_COLOR}>

            <Box
                sx={{ width: "6%", ml: 10, mt: 10 }}
                component="img"
                src='/assets/home/banner/shape-2.png'
            />

            <Grid container justifyContent="center"  >

                <Grid container bgcolor="red" lg={7} sx={{
                    mr: 40,
                    mt: 4, mb: 3,
                    height: '60vh',
                    backgroundImage: `url(${bgImage})`,
                }}
                >
                   

                </Grid>

            </Grid>


        </Grid >
    )
}







// <Box width="40%" bgcolor="#ffff" sx={{
//     height: "fit-content",
//     ml: 'auto',
//     mr: 0, mb: 40
// }}>
//     <Box bgcolor="red" pt={10} pb={10} m={1} sx={{

//     }} justifyContent="center">

//         <H4 width="40" fontFamily='Syne' m={1.5} textAlign="center" height="fit-content">Interior decoration partly thrives on being social</H4>

//         <H5 pt={5} width="100%" fontWeight="550" bgcolor="" textAlign="center">An interior designer is someone who
//             plans researches,coordinations and
//             manages enhancement projects
//         </H5>

//     </Box>
// </Box>



















//mt={10}








// import { MAIN_COLOR, SECONDARY_COLOR } from '@/utils/colors'
// import { Grid, Typography } from '@mui/material'
// import React from 'react'
// import { HoverButton, PrimaryButton } from '../UI/Button/CustomizedButton'

// export default function Banner() {

//     return (

//         <Grid py={10} container bgcolor={MAIN_COLOR} sx={{
//             mt: { xs: 7, lg: 10 }, justifyContent: 'center', alignItems: 'center', position: "relative"
//         }}>

//             <img width="55%" src="/assets/home/banner/banner.jpeg" alt="" />


//             <Grid sx={{
//                 bgcolor: "white", p: 4,
//                 position: 'absolute', top: 40, right: 40
//             }}>

//                 <Typography variant='h5' sx={{ my: 2, fontFamily: 'Syne' }}>Interior decoration partly <br /> thrives on  being   social</Typography>

//                 <Typography sx={{ mb: 6 }}>An interior designer is someone who <br />
//                     plans researches,coordinations and
//                     <br />
//                     manages enhancement projects</Typography>

//                 <Grid container justifyContent="end" sx={{ bgcolor: "white", position: "absolute", bottom: 0, right: 0 }}>

//                     <HoverButton px={3} bgcolor={SECONDARY_COLOR}>Start your project</HoverButton>

//                 </Grid>

//             </Grid>

//         </Grid >
//     )
// }
