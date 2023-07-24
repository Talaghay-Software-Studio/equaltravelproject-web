// import { Grid } from "@mui/material";
import ComingSoon from "./ComingSoon";
import Layout from "./Layout";

export default function Account(){
    return (
      // <Layout topMargin={true} appBarStyle={"primary"}>
      //   <Grid>
      //     {/* Left Section */}
      //     <Grid></Grid>
      //     {/* Right Section */}
      //     <Grid></Grid>
      //   </Grid>
      // </Layout>

      <Layout topMargin={false} appBarStyle={"primary"}>
        <ComingSoon />
    </Layout>
    );
}