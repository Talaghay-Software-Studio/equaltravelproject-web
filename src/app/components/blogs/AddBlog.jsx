
import {
  Button,
  Divider,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
  Box,
} from "@mui/material";
import Layout from "../../pages/Layout";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function AddBlog() {
  const [ blogPost, setBlogPost ] = useState({
    blogTitle: "",
    content: "",
    status: "",
    visibility: "",
    excerpt: ""
  });

  const handleEditDetails = (event) => {
    const { name, value } = event.target;
    setBlogPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout topMargin={true} appBarStyle={"primary"}>
      <Grid sx={{ padding: "50px 70px" }}>
        <Typography
          sx={{ color: "#3B79C9", fontWeight: "700", fontSize: "2.5em" }}
        >{`Publish blog`}</Typography>

        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          {/* Left Section */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: "75%",
              paddingRight: "20px",
            }}
          >
            <FormControl variant="outlined" sx={{ marginBottom: "30px" }}>
              <Typography
                htmlFor="blogTitle"
                sx={{
                  color: "#484848",
                  fontWeight: "600",
                  fontSize: "0.938em",
                }}
              >
                Title
              </Typography>
              <OutlinedInput
                type="text"
                id="blogTitle"
                name="blogTitle"
                value={blogPost.blogTitle}
                onChange={handleEditDetails}
                sx={{
                  borderRadius: "8px",
                  color: "#484848",
                  fontWeight: "600",
                  fontSize: "1.125em",
                  border: "none",
                  "& fieldset": {
                    border: "1px solid #C2C6CC",
                  },
                }}
              />
            </FormControl>

            <FormControl variant="outlined" sx={{ marginBottom: "30px" }}>
              <Typography
                htmlFor="content"
                sx={{
                  color: "#484848",
                  fontWeight: "600",
                  fontSize: "0.938em",
                }}
              >
                Body
              </Typography>
              <OutlinedInput
                type="text"
                id="content"
                name="content"
                value={blogPost.content}
                onChange={handleEditDetails}
                sx={{
                  borderRadius: "8px",
                  color: "#484848",
                  fontWeight: "600",
                  fontSize: "1.125em",
                  border: "none",
                  "& fieldset": {
                    border: "1px solid #C2C6CC",
                  },
                }}
              />
            </FormControl>
          </Grid>

          {/* Right Section */}
          <Grid
            sx={{
              borderRadius: "16px",
              boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              paddingBottom: "30px",
            }}
          >
            <Grid sx={{ padding: "15px 30px" }}>
              {/* Buttons */}
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  paddingBottom: "15px",
                }}
              >
                <Button
                  sx={{
                    minWidth: "130px",
                    background: "#3B79C9",
                    borderRadius: "8px",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.875em",
                    "&:hover": {
                      background: "#3B79C9",
                      color: "white",
                    },
                  }}
                >{`PREVIEW`}</Button>
                <Button
                  sx={{
                    minWidth: "130px",
                    background: "#3B79C9",
                    borderRadius: "8px",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.875em",
                    "&:hover": {
                      background: "#3B79C9",
                      color: "white",
                    },
                  }}
                >{`SAVE DRAFT`}</Button>
              </Grid>

              {/* Status and Visibility */}
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                  }}
                >
                  {`STATUS:`}
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "15px",
                  }}
                >
                  <CircleIcon sx={{ color: "#3B79C9", paddingRight: "16px" }} />
                  <Typography
                    sx={{
                      color: "#3B79C9",
                      fontWeight: "700",
                    }}
                  >
                    {`Pending Approval`}
                  </Typography>
                </Grid>

                <Typography
                  sx={{
                    color: "#484848",
                    fontWeight: "600",
                    fontSize: "0.938em",
                  }}
                >
                  {`VISIBILITY:`}
                </Typography>
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <VisibilityIcon
                    sx={{ color: "#3B79C9", paddingRight: "16px" }}
                  />
                  <Typography
                    sx={{
                      color: "#3B79C9",
                      fontWeight: "700",
                    }}
                  >
                    {`Only Me`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ color: "#9A9A9A", margin: "0px !important" }}
            />

            {/* Featured Images */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "15px 30px",
              }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  fontSize: "0.875em",
                  paddingBottom: "16px",
                }}
              >
                {`FEATURED IMAGE`}
              </Typography>
              <Grid sx={{ display: "flex", flexDirection: "column " }}>
                <Box
                  sx={{
                    border: "1px dashed #9A9A9A",
                    background: "#E0E2E6",
                    display: "flex",
                    justifyContent: "center",
                    padding: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4A4A4A",
                      fontWeight: "600",
                      fontSize: "0.875em",
                    }}
                  >
                    {`SET FEATURED IMAGE`}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ color: "#9A9A9A", margin: "0px !important" }}
            />

            <Grid sx={{ padding: "15px 30px" }}>
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  fontSize: "0.875em",
                  paddingBottom: "16px",
                }}
              >
                {`EXCERPT`}
              </Typography>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <Typography
                  htmlFor="excerpt"
                  sx={{
                    color: "#4A4A4A",
                    fontWeight: "600",
                    fontSize: "0.875em",
                  }}
                >
                  {`Write an excerpt`}
                </Typography>
                <OutlinedInput
                  fullWidth
                  type="text"
                  id="excerpt"
                  name="excerpt"
                  placeholder="Excerpt are summary or teaser of your content, and help you control what appears in previews of your blog post or articles."
                  value={blogPost.excerpt}
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
                    "& textarea::placeholder": {
                      color: "#9A9A9A",
                      lineHeight: "normal",
                      fontWeight: 600,
                      opacity: 0.8
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ color: "#9A9A9A", margin: "0px !important" }}
            />

            <Grid sx={{ padding: "15px 30px" }}>
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  paddingBottom: "16px",
                }}
              >
                {`SUBMIT FOR REVIEW`}
              </Typography>
              <Typography
                sx={{
                  color: "#4A4A4A",
                  fontWeight: "600",
                  fontSize: "0.875em",
                }}
              >
                {`Submitting this blog for review will lock further edits and notify the Equal Travel Team in the approval process that this entry is ready for approval.`}
              </Typography>
            </Grid>

            <Button
              sx={{
                borderRadius: "28px",
                width: "119px",
                height: "36px",
                color: "#FFFFFF",
                background: "#3B79C9",
                fontWeight: "700",
                fontSize: "0.938em",
                placeSelf: "center",
                "&:hover": {
                  color: "#FFFFFF",
                  background: "#3B79C9",
                },
              }}
            >
              {`Submit`}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
