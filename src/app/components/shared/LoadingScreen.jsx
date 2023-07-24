import { Backdrop, CircularProgress } from '@mui/material';
import theme from "../../styles/theme";

export default function LoadingScreen({ isLoading }){

    return (
      <Backdrop sx={{ zIndex: theme.zIndex.drawer + 1,  color: "#fff"}} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
}