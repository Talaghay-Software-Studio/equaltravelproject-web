import { Box, Grid, IconButton, Typography } from "@mui/material";
import Layout from "./Layout";
import PropertyCard from "../components/PropertyCard";
import MapImage from "/assets/icons/svg/map.svg";
import CloseIcon from "@mui/icons-material/Close";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import PropertyFocusCard from "../components/PropertyFocusCard";
import React from "react";

const keywords = ["100 Smart Street", "12 Mar 2021", "2 guests"];

export default function SearchPage(){

    const [searchKeywords, setSearchKeywords] = React.useState(keywords)
    const renderPropertyCards = () => {
      let pc = [];

      for (let i = 1; i <= 7; i++) {
        let bgUrl = "/assets/img/properties/{0}.png";
        let bgNum = Math.floor(Math.random() * (8 - 2)) + 1; //min: 1, max: 8
        let avatarUrl = "/assets/img/building/{0}.png";
        let avatarNum = Math.floor(Math.random() * (4 - 2)) + 1; //min: 1, max: 4

        pc.push(
          <PropertyCard
            key={i}
            onClick={handleClick}
            bgProp={`${bgUrl.replace("{0}", bgNum)}`}
            avatarProp={`${avatarUrl.replace("{0}", avatarNum)}`}
            flexProp={"1 1 550px"}
            showBottomIcons={true}
            paperShadow={true}
            sx={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
          />
        );
      }
      return pc;
    };

    const handleClick = (event) => {
        console.log("Click evt: ", event);
        // setSelectedProperty({
        //   ...selectedProperty,
        //   image: bgUrl.replace("{0}", bgNum),
        // });
    }

    const removeKeyword = (ind) => {
        const newArr = searchKeywords;
        newArr.filter(x => x !== searchKeywords[ind]);
        setSearchKeywords(newArr);
    }

    return (
      <Layout topMargin={true}>
        <Grid className="search-results-container" 
            sx={{ padding: "25px", 
            display: "flex", 
            flexDirection: "row", 
            height: "640px" }}>
            {/* SEARCH RESULTS */}
            <Grid className="property-card-container" 
                sx={{ width: "50%", 
                marginRight: "15px", 
                display: "flex", 
                flexDirection: "column", 
                padding: "0px 20px"}}>

                {/* Search Header */}
                <Grid sx={{ paddingBottom: "10px" }}>
                    <Typography className="title" 
                        sx={{color: "#484848", 
                        paddingLeft: "10px",
                        fontSize: "1.5rem"}}> 
                        {"7 results found"} 
                    </Typography>
                    <Grid className="search-header-btns" 
                        sx={{ display: "flex", 
                        flexDirection: "row" }}>
                        {searchKeywords.map((search, ind) => (
                            <Grid key={search} 
                                size="small" 
                                sx={{ display: "flex", 
                                flexDirection: "row", 
                                alignItems: "center",
                                borderRadius: "30px", 
                                background: "#E0E2E6", 
                                margin: "5px", 
                                justifyContent: "space-between", 
                                height: "32px", 
                                pl: "10px"}}>
                                <Typography sx={{ textTransform: "capitalize", 
                                    color: "#484848", 
                                    fontSize: "0.8rem" }}>
                                        {search}
                                </Typography>
                                <IconButton onClick={() => {removeKeyword(ind)}}>
                                    <CloseIcon fontSize="small"/>
                                </IconButton>
                            </Grid>
                        ))}

                        <Grid
                            sx={{ display: "flex", 
                                flexDirection: "row", 
                                borderRadius: "30px",
                                alignItems: "center",
                                background: "white", 
                                ml: "auto", 
                                border: "1px solid #9A9A9A", 
                                height: "38px", 
                                padding: "10px" }}>
                            <IconButton width="14px" 
                                height="14px">
                                <TuneRoundedIcon fontSize="small"/>
                            </IconButton>

                            <Typography 
                                sx={{ textTransform: "capitalize", 
                                color: "#484848" }}>
                                    Filter
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Property Image Card */}
                <Grid sx={{ overflowY: "auto",
                    display: "flex", 
                    flexDirection: "row", 
                    flexWrap: "wrap", 
                    flex: "1 1 550px",
                    paddingRight: "20px" }}
                    >
                    {renderPropertyCards()}
                </Grid>
              </Grid>

              {/* MAP */}
              <Grid className="map-container" sx={{ display: "flex", width: "50%" }}>
                <Box
                  sx={{
                    display: "flex",
                    backgroundImage: `url(${MapImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "-webkit-fill-available"
                  }}
                >
                    <Grid sx={{ padding: "6% 10%", marginTop: "auto", width: "100%"}}>
                        <PropertyFocusCard />
                    </Grid>
                </Box>
              </Grid>
            </Grid>
        </Layout>
    );
}