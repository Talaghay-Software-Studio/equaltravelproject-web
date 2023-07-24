import styled from "@emotion/styled";
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused > fieldset {
    border: none !important;
  }
  ,
  & .MuiInputBase-root.MuiOutlinedInput-root > input {
    padding: 11px 14px !important;
    font-size: 14px !important;
  }
  ,
  & .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-multiline {
    padding: 14px 14px !important;
    font-size: 14px !important;
  }
`;

export default function AddPropertyTitle(){
    const [ propertyDetails, setPropertyDetails ] = useState({
        propertyTitle: "",
        propertyDescription: ""
    });

    const handleChange = (evt) => {
         const { name, value } = evt.target;
         setPropertyDetails((prevState) => ({
           ...prevState,
           [name]: value,
         }));
    }
    return (
      <Grid
        sx={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}
      >
        <Typography
          className="title"
          sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
        >
          {`Let's give your property a catchy title and description.`}
        </Typography>
        <Typography
          sx={{
            color: "#484848",
            fontSize: "1rem",
            marginBottom: "25px",
            width: "75%",
          }}
        >{`Let's have some fun and create a snappy title. Feel free to change it later if needed.`}</Typography>

        <Grid sx={{ width: "50%" }}>
          <Box
            sx={{
              background: "#FFFFFF",
              borderRadius: "10px",
              padding: "5px",
              height: "52px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              border: "1px solid #9A9A9A",
            }}
          >
            <CustomTextField
              focused
              id="propertyTitle"
              name="propertyTitle"
              label="Title"
              value={propertyDetails.propertyTitle}
              fullWidth
              outline="none"
              onChange={(evt) => handleChange(evt)}
            />
          </Box>
        </Grid>

        <Typography
          sx={{
            color: "#484848",
            fontSize: "1rem",
            marginTop: "25px",
            marginBottom: "25px",
            width: "75%",
          }}
        >{`Feel free to revise and customize your property's description it to your liking.`}</Typography>

        <Grid sx={{ width: "50%" }}>
          <Box
            sx={{
              background: "#FFFFFF",
              borderRadius: "10px",
              padding: "14px 5px",
              minHeight: "52px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              border: "1px solid #9A9A9A",
            }}
          >
            <CustomTextField
              multiline
              maxRows={4}
              focused
              id="propertyDescription"
              name="propertyDescription"
              label="Description"
              value={propertyDetails.propertyDescription}
              fullWidth
              outline="none"
              onChange={(evt) => handleChange(evt)}
            />
          </Box>
        </Grid>
      </Grid>
    );
}