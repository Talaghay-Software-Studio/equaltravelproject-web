import { Grid, Typography } from "@mui/material";
import PropertyCard from "./PropertyCard";

export default function PropertyListings(props){
    const renderPropertyCards = () => {
        let pc = [];

        for (let i = 1; i <= props.propertyCount; i++) {
            let bgUrl = '/assets/img/properties/{0}.png';
            let bgNum = Math.floor(Math.random() * (8 - 2)) + 1; //min: 1, max: 8
            let avatarUrl = '/assets/img/building/{0}.png';
            let avatarNum = Math.floor(Math.random() * (4 - 2)) + 1; //min: 1, max: 4
            let isRated = props.title == "Top Rated Properties";
            let isPriced = props.title == "Featured Properties on our Listing";
            let hideFaveIcon = props.title == `Property Rental Guides & Tips`;
            let rating = Math.floor(Math.random() * (5 - 2)) + 1; //min: 1, max: 5
            let price = "$ 1000 - 5000 USD";
            

            pc.push(
              <PropertyCard
                key={i}
                bgProp={`${bgUrl.replace("{0}", bgNum)}`}
                avatarProp={`${avatarUrl.replace("{0}", avatarNum)}`}
                isRated={isRated}
                rating={rating}
                isPriced={isPriced}
                hideFaveIcon={hideFaveIcon}
                price={price}
              />
            );
        }
        return pc;
    };

    return(
        <Grid sx={{ padding: "30px 0px" }}>
            {/* Section Title */}
            <Grid sx={{ width: "380px", marginLeft: "10px" }}>
                <Typography className="title" sx={{ color: "#3B79C9", fontSize: "36px" }}>{props.title}</Typography>
                <div style={{ borderBottom: "6px solid #3B79C9", width: "140px", margin: "20px 0px" }} />
            </Grid>

            {/* Top Icon/s or Info */}

            {/* Property Image Card */}
            <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {renderPropertyCards()}
            </Grid>
        </Grid>
    )
}