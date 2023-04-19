import { Typography } from '@mui/material';
import React from 'react'

export const H1 = (props: any) => {

    const { width, textAlign, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor } = props;

    return (

        <Typography sx={{

            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '6rem' }
        }}>{props.children}</Typography>

    )
}


export const H2 = (props: any) => {

    const { width, textAlign, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor } = props;

    return (

        <Typography sx={{

            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem', lg: '2.5rem' }
        }}>{props.children}</Typography>

    )
}


export const H3 = (props: any) => {

    const { width, textAlign, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor } = props;

    return (

        <Typography sx={{

            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem', lg: '2.5rem' }
        }}>{props.children}</Typography>

    )
}




export const H4 = (props: any) => {

    const { width, textAlign, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor } = props;

    return (

        <Typography sx={{

            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.18rem', lg: '1.25rem' }
        }}>{props.children}</Typography>

    )
}


export const H5 = (props: any) => {

    const { width, textAlign, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor } = props;

    return (

        <Typography sx={{

            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
        }}>{props.children}</Typography>

    )
}




export const H6 = (props: any) => {

    const { width, textAlign, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor } = props;

    return (

        <Typography sx={{

            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.2rem' }
        }}>{props.children}</Typography>

    )
}



