import { 
    Grid,
    InputAdornment,
    TextField, 
    Typography 
} from "@mui/material";
import SendIcon from "../../assets/icons/svg/send-round.svg"

export default function Newsletter(){
    return (
        <Grid sx={{ bgcolor: '#7AADFF', color: 'white', display: 'flex', justifyContent: 'center', p: '16px 20%', width: '100%'}}>
            <Grid sx={{ display: 'flex', flexDirection: 'column', mx: 2 }}>
                <Typography className="title" sx={{ textTransform: 'uppercase'}}> Newsletter </Typography>
                <Typography > Stay Up To Date </Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexGrow: 1,  mx: 2}}>
                <TextField 
                    label="Your Email.."
                    sx={{ flexGrow: 1 }}
                    InputProps={{ sx: { background: 'white', borderColor: 'white', borderRadius: 30, width: '100%', paddingRight: 0, }, endAdornment: (
                        <InputAdornment position="start">
                          <img src={SendIcon} alt="Send Icon" style={{ position: "relative", left: "5px" }}/>
                        </InputAdornment>
                      ) }} />
            </Grid>
        </Grid>
    )
}