import { Box, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "/assets/icons/svg/search-round.svg";
import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const propertTypes = ["Rooms", "Flats", "Hostels", "Villas"];

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused > fieldset {
    border: none !important;
  }
  ,
  & .MuiInputBase-root.MuiOutlinedInput-root > input {
    padding: 8px 14px !important;
    font-size: 14px !important;
  }
`;

export default function FindProperty(){
    // const compStyles = useStyles();
    const navigate = useNavigate();

    const [guestNum, setGuestNum] = React.useState();

    const handleGuestChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)){
            setGuestNum(e.target.value);
        }
    }

    const handleSearch = () => {
      navigate({
        pathname: "/search-results",
        // search: createSearchParams({
        //   results: '10 Results Found'
        // }).toString()
      })
    };

    return (
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "end",
          color: "white",
        }}
      >
        <Grid sx={{ display: "flex", paddingLeft: "25px" }}>
          <Typography className="title" sx={{ fontSize: "2em" }}>
            FIND
          </Typography>
          {propertTypes.map((property) => (
            <Typography
              key={property}
              sx={{ px: "10px", mt: "10px", cursor: "pointer" }}
            >
              {property}
            </Typography>
          ))}
        </Grid>
        <Grid
          sx={{
            background: "#FFFFFF",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: "#FFFFFF",
              borderRadius: "30px",
              marginLeft: "10px",
              padding: "5px",
              height: "52px",
              width: "745px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <CustomTextField
              focused
              id="location-field"
              label="Location"
              placeholder="Which city do you prefer?"
              outline="none"
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <CustomTextField
              focused
              type="date"
              id="check-in-field"
              label="Check In"
              placeholder="Add Dates"
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <CustomTextField
              focused
              type="date"
              id="check-out-field"
              label="Guests"
              placeholder="Add Dates"
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <CustomTextField
              focused
              id="guest-count-field"
              label="Guests"
              placeholder="Add Guests"
              value={guestNum}
              onChange={(e) => handleGuestChange(e)}
            />
            <IconButton
              sx={{ backgroundColor: "##3B79C9", padding: "3px" }}
              onClick={handleSearch}
            >
              <img
                src={SearchIcon}
                alt="Search Icon"
                style={{ height: 44, width: 42, marginBottom: 2 }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    );
}