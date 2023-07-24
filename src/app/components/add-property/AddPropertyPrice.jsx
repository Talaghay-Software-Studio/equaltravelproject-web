import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import styled from "@emotion/styled";

const CustomField = styled(TextField)`
  & .MuiInputBase-root > input {
    font-weight: 700;
    font-size: 3.75rem;
    color: #484848 !important;
  }
`;
export default function AddPropertyPrice(){
    const [price, setPrice] = useState(1063);
    const handlePriceCount = (action) => {
        let count = price;
        if (action == "add") {
          count = ++count;
        } else if (action == "minus") {
          count = --count;
        }
        setPrice(count >= 0 ? count : 0);
    }

    const handlePriceChange = (evt) => {
        setPrice(evt.target.value.replace(/\D/g, ""));
    }
    return (
      <Grid
        sx={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}
      >
        <Typography
          className="title"
          sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
        >
          {`Last but not the least, let’s set your price.`}
        </Typography>
        <Typography
          sx={{
            color: "#484848",
            fontSize: "1rem",
            marginBottom: "25px",
            width: "75%",
          }}
        >{`You can always change this anytime.`}</Typography>

        <Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#484848",
              padding: "20px",
              minWidth: "225px",
              backgroundColor: "#E8EAEC",
              width: "35%",
              minHeight: "215px",
              borderRadius: "30px",
              height: "100%",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                flexGrow: 1,
              }}
            >
              <IconButton
                sx={{ backgroundColor: "white" }}
                onClick={() => handlePriceCount("minus")}
              >
                <RemoveIcon sx={{ color: "#484848" }} />
              </IconButton>
              <Grid
                sx={{
                  margin: "0px 5px",
                  fontWeight: "700",
                  fontSize: "3.75rem",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 90px",
                }}
              >
                {`$ `}{" "}
                <CustomField
                  sx={{}}
                  variant="standard"
                  type="tel"
                  value={price}
                  onChange={handlePriceChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>

              <IconButton
                sx={{ backgroundColor: "white" }}
                onClick={() => handlePriceCount("add")}
              >
                <AddIcon sx={{ color: "#484848" }} />
              </IconButton>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>{`per night`}</Typography>
              <Typography
                sx={{ textAlign: "center", padding: "0px 95px" }}
              >{`Places like yours in your area usually range from ₱1,063 to ₱1,772`}</Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
}