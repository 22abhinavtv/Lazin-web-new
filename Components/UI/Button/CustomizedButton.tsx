
import { SECONDARY_COLOR } from "@/utils/colors";
import { Button, Grid } from "@mui/material";

export const PrimaryButton = (props: any) => {

    const { children, onClick, bgcolor, type, mx, my, px, className, disabled } = props;

    return (
        <Grid>

            <Button disabled={disabled} className={className} type={type} sx={{
                textTransform: "capitalize", mx: mx, my: my,
                color: bgcolor === "white" ? "black" : "white",
                width: props.width, px: px, borderRadius: "0",
                boxShadow: "none", bgcolor: bgcolor, border: `none`, "&:hover": {
                    bgcolor: "transparent", boxShadow: "none",
                    color: bgcolor, border: `1px solid ${bgcolor}`,

                },
            }}
                variant="contained"
                onClick={onClick}
            >
                {children}
            </Button >

        </Grid>
    )
}


export const OutlinedButton = (props: any) => {

    const { children, onClick, bgcolor, type, m, mx, my, px } = props;

    return (
        <Button type={type} sx={{
            textTransform: "capitalize",
            color: bgcolor, m: m, mx: mx, my: my,
            width: props.width, px: px, borderRadius: "0",
            boxShadow: "none", bgcolor: "transparent", border: `1px solid ${bgcolor}`, "&:hover": {
                bgcolor: "transparent", boxShadow: "none",
                color: bgcolor, border: `1px solid ${bgcolor}`,
            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}



export const HoverButton = (props: any) => {

    const { children, onClick, bgcolor, type, mx, my, px, className, disabled } = props;

    return (
        
        <Grid>

            <Button disabled={disabled} className={className} type={type} sx={{
                textTransform: "capitalize", mx: mx, my: my,
                color: bgcolor === "white" ? "black" : "white",
                width: props.width, px: px, borderRadius: "0",
                boxShadow: "none", bgcolor: bgcolor, border: `none`, "&:hover": {
                    bgcolor: bgcolor, boxShadow: `#CB634A 7px 7px 0px`,
                    color: "white", border: `1px solid ${bgcolor}`,

                },
            }}
                variant="contained"
                onClick={onClick}
            >
                {children}
            </Button >

        </Grid>
    )
}


