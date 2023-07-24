import { Grid, Typography } from "@mui/material";
import PropertyCard from "../property/PropertyCard";

export default function ReviewProperty(props){
    const { propertyTitle, propertyPrice, propertyDescription, background } = props;
    return (
      <Grid
        sx={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}
      >
        <Typography
          className="title"
          sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
        >
          {`Finally! let’s review your listing.`}
        </Typography>
        <Typography
          sx={{
            color: "#484848",
            fontSize: "1rem",
            marginBottom: "25px",
            width: "75%",
          }}
        >{`Here's how your listing will appear to guests. Please review and ensure everything looks good. Don't hesitate to make any necessary changes.`}</Typography>
        <Grid sx={{ width: "35%" }}>
          <PropertyCard
            bgProp={background}
            isRated={false}
            isPriced={true}
            hideFaveIcon={true}
            price={propertyPrice}
            title={propertyTitle}
            subtitle={propertyDescription}
          />
        </Grid>
      </Grid>
    );
}