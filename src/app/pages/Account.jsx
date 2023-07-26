import { Avatar, Button, FormControl, Grid, OutlinedInput, Tab, Tabs, Typography } from "@mui/material";
import Layout from "./Layout";
import { Box } from "@mui/system";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import React from "react";
import ReviewList from "../components/rewiew/ReviewList";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BlogList from "../components/blogs/BlogList";

const userReviews = [
  {
    id: 1,
    title: "The cutest guests I’ve ever had!",
    content:
      "Absolutely loved hosting John and her adorable dog! They were the perfect guests. Sarah was responsible, communicative, and took excellent care of her furry companion.",
    rating: 4,
    startDate: "2023-03-15",
    endDate: "2023-03-20",
  },
  {
    id: 2,
    title: "Amazing Stay!",
    content:
      "We had the most incredible time hosting Emily and her adorable dog. Emily was a delightful guest, and her furry companion was simply a joy to have around. Their dog was well-behaved and friendly, and it warmed our hearts to see the strong bond they shared.",
    rating: 5,
    startDate: "2023-06-30",
    endDate: "2023-06-30",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    rating: 1,
    startDate: "2023-06-30",
    endDate: "2023-06-30",
  },
];

const userBlogs = [{
  id: 1,
  title: "Traveling the World with Your Four-Legged Friend",
  photo: "/assets/img/blog-post.png"
}];

const userDetails = {
  firstname: "John",
  lastname: "Doberman",
  address: "Tivat, Montenegro",
  bio: "Disability Advocate and Dog Lover 🐾",
  photo: "",
  work: "",
  accessibilty_needs: "Visual Impairment, Mobility or Physical Impairment",
  reviewCount: 3,
  blogCount: 4,
  confirmedInfo: [
    {
      label: "Identity",
      status: true,
    },
    {
      label: "Phone",
      status: false,
    },
    {
      label: "Email",
      status: true,
    },
  ],
};

const initialInfo = {
  firstname: "John",
  lastname: "Doberman",
  address: "Tivat, Montenegro",
  bio: "Disability Advocate and Dog Lover 🐾",
  work: "",
};

export default function Account(){
  const [tabValue, setTabValue] = React.useState(0);
  const [editAccount, setEditAccount] = React.useState(false);
  const [editInfo, setEditInfo] = React.useState(initialInfo);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const ReviewsTabPanel = (props) => {
    const { value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <ReviewList reviews={userReviews} />
        )}
      </div>
    );
  }

  const BlogsTabPanel = (props) => {
    const { value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <BlogList blogs={userBlogs} />
        )}
      </div>
    );
  }

  const handleToggleEdit = () => {
    setEditAccount(!editAccount);
  }

  const handleEditDetails = (evt) => {
    setEditInfo({
      ...editInfo,
      [evt.target.name]: evt.target.value,
    });
  }

  const handleCancelEdit = () => {
    setEditInfo(initialInfo);
    setEditAccount(false);
  }


  return (
    <Layout topMargin={true} appBarStyle={"primary"}>
      <Grid
        sx={{ padding: "50px 45px", display: "flex", flexDirection: "row" }}
      >
        {/* Left Section */}
        <Grid item xs={4} sx={{ marginRight: "40px", display: "flex" }}>
          <Box
            sx={{
              borderRadius: "8px",
              border: "1px solid #9A9A9A",
              boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
              padding: "20px 20px 50px",
              minHeight: "650px",
              minWidth: "280px",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Avatar
                alt="User Profile Picture"
                src="/assets/img/profile.png"
                sx={{ width: 165, height: 165 }}
              />
              <Typography sx={{ padding: "10px", fontWeight: 600 }}>
                {userDetails.address}
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: "20px", marginBottom: "auto" }}>
              <Typography
                className="title"
                sx={{
                  color: "#484848",
                  fontSize: "1.125em",
                  fontWeight: "700",
                }}
              >{`About`}</Typography>
              <Typography sx={{ color: "#9A9A9A", fontSize: "0.875em" }}>
                {userDetails.bio}
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: "20px" }}>
              <Typography
                className="title"
                sx={{
                  color: "#484848",
                  fontSize: "1.125em",
                  fontWeight: "700",
                }}
              >{`Confirmed Information`}</Typography>
              {userDetails.confirmedInfo.map((info) => (
                <Grid
                  key={info.label}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  {info.status ? (
                    <CheckRoundedIcon sx={{ color: "#3B79C9" }} />
                  ) : (
                    <CloseRoundedIcon sx={{ color: "#FF7A7A" }} />
                  )}
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      color: "#9A9A9A",
                      fontSize: "0.938em",
                    }}
                  >
                    {info.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        {/* Right Section */}
        <Grid
          item
          xs={8}
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Grid sx={{ paddingBottom: "20px" }}>
            <Typography
              sx={{ color: "#3B79C9", fontSize: "1.75em", fontWeight: "700" }}
            >{`Hello, ${userDetails.firstname} ${userDetails.lastname}`}</Typography>
            <Typography sx={{ color: "#9A9A9A", fontSize: "0.875em" }}>
              {userDetails.accessibilty_needs}
            </Typography>
          </Grid>

          {/* Default Display */}
          {!editAccount && (
            <Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "20px",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "6px",
                    border: "1px solid #484848",
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                    padding: "10px 20px",
                    marginRight: "5px",
                  }}
                  onClick={handleToggleEdit}
                >{`Edit Profile`}</Button>
                <Button
                  sx={{
                    borderRadius: "6px",
                    border: "1px solid #484848",
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                    padding: "10px 20px",
                    marginLeft: "5px",
                  }}
                >{`New Blog`}</Button>
              </Grid>
              <Grid sx={{}}>
                <Box sx={{ width: "100%" }}>
                  <Box>
                    <Tabs
                      value={tabValue}
                      onChange={handleChange}
                      aria-label="Account profile tabs for reviews and blogs"
                      role="tablist"
                    >
                      <Tab
                        label={`${userDetails.reviewCount} Reviews`}
                        icon={
                          <StarRateRoundedIcon
                            sx={{ justifyContent: "center" }}
                          />
                        }
                        role="tab"
                        aria-controls="reviews-panel"
                        sx={{
                          minHeight: "40px",
                          flexDirection: "row",
                          borderRadius: "10px",
                          color: "#9A9A9A",
                          fontSize: "1.125em",
                          fontWeight: "700",
                          "& svg": {
                            marginRight: "5px !important",
                          },
                        }}
                      />
                      <Tab
                        label={`${userDetails.blogCount} Published Blogs`}
                        role="tab"
                        aria-controls="blogs-panel"
                        sx={{
                          minHeight: "40px",
                          flexDirection: "row",
                          borderRadius: "10px",
                          color: "#9A9A9A",
                          fontSize: "1.125em",
                          fontWeight: "700",
                        }}
                      />
                    </Tabs>
                  </Box>
                  <ReviewsTabPanel
                    id="reviews-panel"
                    value={tabValue}
                    index={0}
                    role="tabpanel"
                  />
                  <BlogsTabPanel
                    id="blogs-panel"
                    value={tabValue}
                    index={1}
                    role="tabpanel"
                  />
                </Box>
              </Grid>
            </Grid>
          )}

          {/* Edit Section */}
          {editAccount && (
            <Grid sx={{ display: "flex", flexDirection: "column" }}>
              <FormControl variant="outlined" sx={{ marginBottom: "30px" }}>
                <Typography
                  htmlFor="bio"
                  sx={{
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                  }}
                >
                  About
                </Typography>
                <OutlinedInput
                  type="text"
                  id="bio"
                  name="bio"
                  value={editInfo.bio}
                  multiline
                  minRows={5}
                  maxRows={5}
                  onChange={handleEditDetails}
                  sx={{
                    borderRadius: "8px",
                    border: "none",
                    "& fieldset": {
                      border: "1px solid #C2C6CC",
                    },
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ marginBottom: "30px" }}>
                <Typography
                  htmlFor="address"
                  sx={{
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                  }}
                >
                  Location
                </Typography>
                <OutlinedInput
                  type="text"
                  id="adress"
                  name="address"
                  value={editInfo.address}
                  onChange={handleEditDetails}
                  sx={{
                    borderRadius: "8px",
                    border: "none",
                    "& fieldset": {
                      border: "1px solid #C2C6CC",
                    },
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ marginBottom: "30px" }}>
                <Typography
                  htmlFor="work"
                  sx={{
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                  }}
                >
                  Work
                </Typography>
                <OutlinedInput
                  type="text"
                  id="work"
                  value={editInfo.work}
                  name="work"
                  onChange={handleEditDetails}
                  sx={{
                    borderRadius: "8px",
                    border: "none",
                    "& fieldset": {
                      border: "1px solid #C2C6CC",
                    },
                  }}
                />
              </FormControl>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onClick={handleCancelEdit}
                  sx={{
                    color: "#484848",
                    fontWeight: "700",
                    fontSize: "0.938em",
                    marginRight: "20px",
                    "&:hover": {
                      background: "none",
                    },
                  }}
                >
                  <CloseRoundedIcon /> Cancel
                </Button>
                <Button
                  onClick={handleCancelEdit}
                  sx={{
                    borderRadius: "28px",
                    width: "119px",
                    height: "56px",
                    color: "#FFFFFF",
                    background: "#3B79C9",
                    fontWeight: "700",
                    fontSize: "0.938em",
                    "&:hover": {
                      color: "#FFFFFF",
                      background: "#3B79C9",
                    },
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}