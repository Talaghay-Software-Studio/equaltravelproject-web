
import Lottie from "lottie-react";
import ComingSoonAnimation from "../../assets/animation/coming-soon.json";
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function ComingSoon(){

  const ComingSoonGrid = styled(Grid)`
    div {
      display: flex;
      justify-content: center;
    }
    div > svg {
      width: 70% !important;
      position: relative;
      top: -70px;
    }
  `;
  return (
    <ComingSoonGrid
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography className="title" sx={{ marginBottom: "20px", position: "relative", top: "150px" }}>
        COMING SOON
      </Typography>
      <Lottie animationData={ComingSoonAnimation} loop={true}/>
    </ComingSoonGrid>
  );
}