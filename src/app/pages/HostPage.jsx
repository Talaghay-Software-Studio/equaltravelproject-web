

import { Box, Button, Card, Grid, Typography } from "@mui/material";
import HostingBanner from "/assets/img/hosting-bg.png";
import RightPropertyImg from "/assets/img/9.png"
import LifestyleImg from "/assets/img/10.png";
import BoysHostelImg from "/assets/img/11.png";
import HostingImg from "/assets/img/hosting1.png";

import Layout from "./Layout";

export default function HostPage(){
    return (
      <Layout topMargin={false} appBarStyle="dynamic" hideBecomeHostBtn={true}>
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${HostingBanner})`,
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
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  flexGrow: 1,
                  margin: "20px 100px 8%",
                  paddingRight: "42%",
                }}
              >
                <Typography
                  className="title"
                  sx={{ color: "white", fontSize: "2.375rem" }}
                >{`Try Hosting With Us`}</Typography>
                <Typography
                  sx={{ color: "white", py: "20px" }}
                >{`Introducing Equal Travel Hosting: Empower Inclusive Travel Experiences!`}</Typography>
                <Button
                  href="/add-property"
                  sx={{
                    backgroundColor: "#3B79C9",
                    color: "white",
                    borderRadius: "30px",
                    width: "220px",
                    height: "60px",
                    "&:hover": {
                      backgroundColor: "#3B79C9 !important",
                      color: "#FFFFFF !important",
                    },
                  }}
                >{`Let's Get Started`}</Button>
              </Grid>
            </Box>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "500px",
                background: "white",
                height: "-webkit-fill-available",
                padding: "30px 100px",
              }}
            >
              {/* First Section */}
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "-webkit-fill-available",
                }}
              >
                <Grid
                  sx={{
                    width: "50%",
                    height: "-webkit-fill-available",
                    padding: "20px 20px 20px 0px",
                  }}
                >
                  <Card
                    sx={{
                      height: "-webkit-fill-available",
                      backgroundColor: "#E0E2E6",
                      width: "-webkit-fill-available",
                      minHeight: "500px",
                      background: `url(${HostingImg}) no-repeat`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></Card>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    padding: "60px 40px",
                  }}
                >
                  <Typography
                    className="title"
                    sx={{ color: "#484848", fontSize: "2.375rem" }}
                  >{`Join Equal Travel Hosting Today!`}</Typography>
                  <Typography sx={{ paddingTop: "20px" }}>
                    {`Are you ready to make a positive impact in the world of travel? At Equal Travel, we believe in creating accessible and inclusive experiences for people with disabilities (PWD). We are reaching out to you because we value your property and its potential to offer a PWD-friendly environment.`}
                  </Typography>
                  <Typography sx={{ paddingTop: "20px" }}>
                    {`By becoming a host with Equal Travel Hosting, you gain the unique opportunity to connect with a growing community of travelers who are actively seeking accessible accommodations. Our platform is designed to showcase and promote properties that prioritize inclusivity and cater to the specific needs of PWD travelers.`}
                  </Typography>
                </Grid>
              </Grid>

              {/* Second Section */}
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "85px",
                }}
              >
                <Typography
                  className="title"
                  sx={{ color: "#484848", fontSize: "2.375rem" }}
                >
                  {`Hosting Tips & Guides`}
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid
                    sx={{
                      height: "-webkit-fill-available",
                      padding: "20px 20px 20px 0px",
                    }}
                  >
                    <Card
                      sx={{
                        height: "-webkit-fill-available",
                        backgroundColor: "#E0E2E6",
                        minWidth: "382px",
                        minHeight: "340px",
                        background: `url(${RightPropertyImg}) no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></Card>
                    <Grid>
                      <Typography
                        className="title"
                        sx={{ color: "#484848", padding: "10px 0px 3px" }}
                      >{`Choose the right property!`}</Typography>
                      <Typography
                        sx={{ color: "#9A9A9A" }}
                      >{`Economy`}</Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    sx={{
                      height: "-webkit-fill-available",
                      padding: "20px",
                    }}
                  >
                    <Card
                      sx={{
                        height: "-webkit-fill-available",
                        backgroundColor: "#E0E2E6",
                        minWidth: "382px",
                        minHeight: "340px",
                        background: `url(${LifestyleImg}) no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></Card>
                    <Grid>
                      <Typography
                        className="title"
                        sx={{ color: "#484848", padding: "10px 0px 3px" }}
                      >{`Best environment for rental`}</Typography>
                      <Typography
                        sx={{ color: "#9A9A9A" }}
                      >{`Lifestyle`}</Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    sx={{
                      height: "-webkit-fill-available",
                      padding: "20px",
                    }}
                  >
                    <Card
                      sx={{
                        height: "-webkit-fill-available",
                        backgroundColor: "#E0E2E6",
                        minWidth: "382px",
                        minHeight: "340px",
                        background: `url(${BoysHostelImg}) no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></Card>
                    <Grid>
                      <Typography
                        className="title"
                        sx={{ color: "#484848", padding: "10px 0px 3px" }}
                      >{`Boys Hostel Apartment`}</Typography>
                      <Typography
                        sx={{ color: "#9A9A9A" }}
                      >{`Property`}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
}