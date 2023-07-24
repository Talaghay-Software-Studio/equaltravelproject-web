import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

const propertyTypes = [
  {
    id: "exclusive",
    label: "An entire place",
    description: "Guest will have the whole place for them.",
  },
  {
    id: "shared",
    label: "Shared unit",
    description: "A rented place within a multi-unit residential building or complex.",
  }
];

export default function SelectPropertyType(){
    const [selectedType, setSelectedType] = React.useState(null);

    const refType = useRef(selectedType);

    useEffect(() => {
      refType.current = selectedType; // send this value
    });

    const handleOptionSelect = (typeId) => {
      setSelectedType(typeId);
    };

    return (
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          className="title"
          sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
        >
          {`What type of place will guests have?`}
        </Typography>
        <Grid sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {propertyTypes.map((type) => (
            <Box
              key={type.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "#F9F9F9",
                border: `${
                  selectedType == type.id
                    ? "3px solid #3B79C9"
                    : "1px solid #F9F9F9"
                }`,
                boxShadow: `${
                  selectedType == type.id ? "0px 2px 12px #3B79C9" : "initial"
                }`,
                borderRadius: "6px",
                margin: "0px 30px 30px 0px",
                minHeight: "100px",
                width: "40%",
                cursor: "pointer",
                padding: "20px"
              }}
              onClick={() => handleOptionSelect(type.id)}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Typography
                  className="title"
                  sx={{
                    color: "#000000",
                    fontSize: "1rem",
                  }}
                >
                  {type.label}
                </Typography>
                <Typography sx={{ color: "#9A9A9A", fontSize: "0.875" }}>
                  {type.description}
                </Typography>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    );
}