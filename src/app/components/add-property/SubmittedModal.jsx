import { Button, Dialog, Grid, Typography } from "@mui/material";
import BlueCheck from "/assets/icons/svg/blue-check.svg"
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledDialog = styled(Dialog)`
  border-radius: 16px !important;
  box-shadow: -8px 8px 24px 8px rgba(0, 0, 0, 0.25);
`;

const BlueButton = styled(Button)`
  background: #3B79C9 !important;
  &:hover {
    background: "#3B79C9 !important;
  }
`;

export default function SubmittedModal({ showSubmit, setShowSubmit }){
    const navigate = useNavigate();
    const handleCloseModal = () => {
      setShowSubmit(false);

      navigate({
        pathname: "/host-page",
      });
    };

    return (
      <StyledDialog
        open={showSubmit}
        onClose={handleCloseModal}
        maxWidth="sm"
        scroll="body"
        fullWidth
        aria-labelledby="auth-dialog-title"
        aria-describedby="auth-dialog-description"
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <img src={BlueCheck} alt="Submitted successfully" />
          <Typography
            className="title"
            sx={{ fontSize: "2.5rem" }}
          >{`Your submission is under review`}</Typography>
          <Typography
            sx={{ color: "#9A9A9A", fontSize: "1.5rem" }}
          >{`Your submission has been submitted and will be reviewed by our team. You will be notified if any additional information is needed`}</Typography>
          <BlueButton
            onClick={handleCloseModal}
            sx={{
              color: "white",
              borderRadius: "30px",
              height: "50px",
              width: "150px",
              margin: "20px",
            }}
            className="title"
          >
            CONTINUE
          </BlueButton>
        </Grid>
      </StyledDialog>
    );
}