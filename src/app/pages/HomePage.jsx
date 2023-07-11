
import { Box, Button, Grid, Typography } from "@mui/material";
import HompageBanner from "/assets/img/homepage-banner.jpg";
import BackgroundImage1 from "/assets/img/hosting-bg.png";
import BackgroundImage2 from "/assets/img/browse-properties.png";
import BackgroundImage3 from "/assets/img/12.png";
import FindProperty from "../components/FindProperty";
import PropertyListings from "../components/PropertyListings";
import Layout from "./Layout";

const propertySections = ["Latest on the Property Listing", "Nearby Listed Properties", "Top Rated Properties"];

export default function HomePage(){
    return (
      <Layout topMargin={false} appBarStyle="dynamic">
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "max-content",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              "&::before": {
                content: `''`,
                minHeight: "680px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${HompageBanner})`,
                position: "relative",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "23%",
                minHeight: "680px",
                width: "-webkit-fill-available",
                overflow: "hidden",
                position: "absolute",
              }}
            >
              <Grid sx={{ display: "flex", justifyContent: "center", flexGrow: 1, margin: "20px 130px 8%" }}>
                <FindProperty />
              </Grid>
            </Box>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "500px",
                background: "white",
                height: "-webkit-fill-available",
                padding: "30px 80px",
              }}
            >
              {propertySections.map((section) => (
                <PropertyListings
                  key={section}
                  title={section}
                  propertyCount={4}
                />
              ))}

              {/* Hosting Advertisment */}
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                    overflow: "hidden",
                    minHeight: "400px",
                    backgroundImage: `url(${BackgroundImage1})`,
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      paddingLeft: "80px",
                    }}
                  >
                    <Typography
                      className="title"
                      sx={{ color: "white", fontSize: "2.375rem" }}
                    >
                      {`Try Hosting With Us`}
                    </Typography>
                    <Typography sx={{ color: "white" }}>
                      {`Earn extra just by renting out your property...`}
                    </Typography>
                    <Button
                      sx={{
                        backgroundColor: "#3B79C9",
                        color: "white",
                        width: "max-content",
                        borderRadius: "30px",
                      }}
                    >{`Become A Host`}</Button>
                  </Grid>
                </Box>
              </Grid>

              {/*  Featured Properties */}
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "500px",
                  background: "white",
                  height: "-webkit-fill-available",
                }}
              >
                <PropertyListings
                  title={`Featured Properties on our Listing`}
                  propertyCount={4}
                />
              </Grid>

              {/* Browse More Properties */}
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                    "&::before": {
                      content: `''`,
                      minHeight: "400px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "right",
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${BackgroundImage2})`,
                      position: "relative",
                    },
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      paddingLeft: "80px",
                      position: "absolute",
                    }}
                  >
                    <Typography
                      className="title"
                      sx={{ color: "white", fontSize: "2.375rem" }}
                    >
                      {`Browse For More Properties`}
                    </Typography>
                    <Typography sx={{ color: "white" }}>
                      {`Explore properties by their categories/types...`}
                    </Typography>
                    <Button
                      sx={{
                        backgroundColor: "#3B79C9",
                        color: "white",
                        width: "max-content",
                        borderRadius: "30px",
                      }}
                    >{`Find A Property`}</Button>
                  </Grid>
                </Box>
              </Grid>

              {/*  Property Rental Guides & Tips */}
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "500px",
                  background: "white",
                  height: "-webkit-fill-available",
                }}
              >
                <PropertyListings
                  title={`Property Rental Guides & Tips`}
                  propertyCount={4}
                />
                <Grid sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      backgroundColor: "#3B79C9",
                      color: "white",
                      width: "max-content",
                      borderRadius: "30px",
                    }}
                  >
                    {`View All Blogs`}
                  </Button>
                </Grid>
              </Grid>

              {/*  Discover More About Property Rental */}
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  background: "white",
                  height: "-webkit-fill-available",
                  paddingBottom: "30px",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    height: "-webkit-fill-available",
                    width: "70%",
                  }}
                >
                  <PropertyListings
                    title={`Discover More About Property Rental`}
                    propertyCount={0}
                  />
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#9A9A9A",
                        paddingLeft: "10px",
                        paddingBottom: "50px",
                        width: "80%",
                      }}
                    >{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`}</Typography>
                    <Button
                      sx={{
                        backgroundColor: "#3B79C9",
                        color: "white",
                        width: "max-content",
                        borderRadius: "30px",
                      }}
                    >
                      {`Discover More`}
                    </Button>
                  </Grid>
                </Grid>
                <Grid sx={{ ml: "auto", display: "flex", paddingTop: "30px" }}>
                  <Box
                    sx={{
                      backgroundImage: `url(${BackgroundImage3})`,
                      minWidth: "315px",
                      borderRadius: "5px",
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
}