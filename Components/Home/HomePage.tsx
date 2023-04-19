import { Grid } from "@mui/material";
import Banner from "./Banner";
import UsedWoods from "./UsedWoods";
import WorkFlow from "./WorkFlow";
import { ExploreNow1, ExploreNow2 } from "./ExploreNow";
import Works from "./Works";
import { Consultation } from "./Consultation";
import { Testimonials } from "./Testimonials";


export const HomePage = () => {

    return (
        <Grid container>

            <Banner />

            <UsedWoods />

            <WorkFlow />

            <ExploreNow1 />

            <Works />

            <ExploreNow2 />

            <Testimonials />

            <Consultation />

        </Grid >
    )
}
