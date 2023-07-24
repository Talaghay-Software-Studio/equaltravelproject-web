import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Lottie from "lottie-react";
import WarningAnimation from "../../assets/warning.json";
import styled from "@emotion/styled";

export default function Unauthorized(){
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const UnauthGrid = styled(Grid)`
    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    div > svg {
      width: 25% !important;    
    }
  `;

  const BlueAuthButton = styled(Button)`
  background: #3B79C9 !important;
  &:hover {
    background: "#3B79C9 !important;
  }
`;

  return (
    <Layout topMargin={true} appBarStyle="primary">
      <UnauthGrid
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Lottie animationData={WarningAnimation} loop={true} />
        <Typography className="title">UNAUTHORIZED</Typography>
        <br />
        <Typography>You do not have access to the requested page.</Typography>
        <BlueAuthButton
          onClick={goBack}
          sx={{
            color: "white",
            borderRadius: "30px",
            height: "40px",
            width: "95px",
            margin: "20px"
          }}
          className="title"
        >
          Go Back
        </BlueAuthButton>
      </UnauthGrid>
    </Layout>
  );
}

