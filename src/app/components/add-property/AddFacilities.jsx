import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const facilities = [
  {
    id: "bedroom",
    singleLabel: "Bedroom",
    pluralLabel: "Bedrooms",
  },
  {
    id: "bed",
    singleLabel: "Bed",
    pluralLabel: "Beds",
  },
  {
    id: "bathroom",
    singleLabel: "Bathroom",
    pluralLabel: "Bathrooms",
  },
  {
    id: "parking",
    singleLabel: "Parking",
    pluralLabel: "Parking",
  },
];
export default function AddFacilities(){
    const [facilityCount, setFacilityCount] = React.useState({
      bedroom: 0,
      bed: 0,
      bathroom: 0,
      parking: 0
    });

    const handleFacilityCount = (action, id) => {

      let count = facilityCount[id];
      if(action == "add"){
          count = ++count;
      } else if(action == "minus"){
          count = --count;
      }

      setFacilityCount({
          ...facilityCount,
          [id]: count >= 0 ? count : 0
      });

    }
    return (
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          className="title"
          sx={{
            color: "#3B79C9",
            fontSize: "2.25rem",
            marginBottom: "40px",
            width: "45%",
          }}
        >
          {`Add facilities available at your place.`}
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {facilities.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: `${
                  index > 0 ? "space-evenly" : "flex-start"
                }`,
                color: "#484848",
                paddingBottom: "20px",
                minWidth: "225px",
              }}
            >
              <IconButton
                sx={{ backgroundColor: "#E8EAEC" }}
                onClick={() => handleFacilityCount("minus", item.id)}
              >
                <RemoveIcon sx={{ color: "#484848" }} />
              </IconButton>
              <Grid
                sx={{
                  margin: "0px 5px 0px 20px",
                  fontWeight: "700",
                  fontSize: "1.375rem",
                }}
              >
                {facilityCount[item.id]}
              </Grid>
              <Grid
                sx={{
                  margin: "0px 20px 0px 5px",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                }}
              >
                {facilityCount[item.id] > 1
                  ? item.pluralLabel
                  : item.singleLabel}
              </Grid>
              <IconButton
                sx={{ backgroundColor: "#E8EAEC" }}
                onClick={() => handleFacilityCount("add", item.id)}
              >
                <AddIcon sx={{ color: "#484848" }} />
              </IconButton>
            </Box>
          ))}
        </Grid>
      </Grid>
    );
}