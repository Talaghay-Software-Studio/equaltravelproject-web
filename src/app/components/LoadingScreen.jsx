import { Backdrop, CircularProgress } from '@mui/material';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function LoadingScreen({ isLoading }){
    const classes = useStyles();

    return (
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
}