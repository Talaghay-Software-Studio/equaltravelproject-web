import LinearProgress from '@mui/material/LinearProgress';
import Grid from "@mui/material/Grid";

export default function AddPropertyProgress(){
    return (
      <Grid sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <LinearProgress
          id=""
          value={50}
          variant="determinate"
          color="primary"
          sx={{ marginRight: "10px", width: "33%", height: "13px" }}
        />
        <LinearProgress
          value={0}
          variant="determinate"
          color="primary"
          sx={{ marginRight: "10px", width: "33%", height: "13px" }}
        />
        <LinearProgress
          value={0}
          variant="determinate"
          color="primary"
          sx={{ width: "33%", height: "13px" }}
        />
      </Grid>
    );
}