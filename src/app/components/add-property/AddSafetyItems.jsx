import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

const safetyItems = [
  {
    id: "firstAid",
    label: "First Aid Kit",
    path: "/assets/icons/svg/first-aid.svg",
  },
  {
    id: "fireExt",
    label: "Fire Extinguisher",
    path: "/assets/icons/svg/fire-ext.svg",
  },
  {
    id: "handSanitizer",
    label: "Hand Sanitizer",
    path: "/assets/icons/svg/hand-sanitizer.svg",
  },
  {
    id: "powerGen",
    label: "Power Generator",
    path: "/assets/icons/svg/power-gen.svg",
  }
];
export default function AddSafetyItems() {
  const [selectedType, setSelectedType] = React.useState([]);

  const refType = useRef(selectedType);

  useEffect(() => {
    refType.current = selectedType; // send this value
  });

  const handleOptionSelect = (typeId) => {
    if (selectedType.indexOf(typeId) > -1) {
      const newSelected = selectedType.filter((item) => item !== typeId);

      setSelectedType(newSelected);
    } else {
      setSelectedType([...selectedType, typeId]);
    }
  };

  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        className="title"
        sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
      >
        {`Add safety items available at your place.`}
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {safetyItems.map((type) => (
          <Box
            key={type.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              border: `${
                selectedType.includes(type.id)
                  ? "3px solid #3B79C9"
                  : "1px solid #9A9A9A"
              }`,
              boxShadow: `${
                selectedType.includes(type.id)
                  ? "0px 2px 12px #3B79C9"
                  : "initial"
              }`,
              borderRadius: "6px",
              background: "#FFFFFF",
              margin: "0px 30px 30px 0px",
              width: "305px",
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
                sx={{
                  color: "#000000",
                  fontSize: "1.5rem",
                  whiteSpace: "break-spaces",
                }}
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
