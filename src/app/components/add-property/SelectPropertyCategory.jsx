import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

const propertyCategory = [
  {
    id: "room",
    label: "Room",
    path: "/assets/icons/svg/room.svg",
  },
  {
    id: "house",
    label: "House",
    path: "/assets/icons/svg/house.svg",
  },
  {
    id: "apartment",
    label: "Apartment",
    path: "/assets/icons/svg/apartment.svg",
  },
  {
    id: "hotel",
    label: "Hotel",
    path: "/assets/icons/svg/hotel.svg",
  },
  {
    id: "resort",
    label: "Resort",
    path: "/assets/icons/svg/resort.svg",
  },
];
export default function SelectPropertyCategory(props) {
  const [selectedType, setSelectedType] = React.useState(props.value);

  const refType = useRef(selectedType);

  useEffect(() => {
    refType.current = selectedType;
  });

  const handleOptionSelect = (typeId) => {
    setSelectedType(typeId);

    props.valueChanged("category", typeId);
  };

  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        className="title"
        sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
      >
        {`What kind of place will you host?`}
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {propertyCategory.map((type) => (
          <Box
            key={type.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              border: `${
                selectedType == type.id
                  ? "3px solid #3B79C9"
                  : "1px solid #9A9A9A"
              }`,
              boxShadow: `${
                selectedType == type.id ? "0px 2px 12px #3B79C9" : "initial"
              }`,
              borderRadius: "6px",
              background: "#FFFFFF",
              margin: "0px 30px 30px 0px",
              minWidth: "305px",
              cursor: "pointer",
            }}
            onClick={() => handleOptionSelect(type.id)}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "100px",
                minWidth: "140px",
                justifyContent: "center",
              }}
            >
              <img src={type.path} />
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                className="title"
                sx={{ color: "#000000", fontSize: "1.5rem" }}
              >
                {type.label}
              </Typography>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}