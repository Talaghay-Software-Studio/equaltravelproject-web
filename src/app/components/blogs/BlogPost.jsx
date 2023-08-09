import { Grid, Typography } from "@mui/material";
import Layout from "../../pages/Layout";
import NoImage from "/assets/img/no-image.png";
// import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { blogs } from "../../../../data/blog.json"
import parse from "html-react-parser";
import moment from "moment";
import SettingsFab from "../shared/SettingsFab";
import React, { useState } from "react";
import { Box } from "@mui/system";

export default function BlogPost(){
    const { id } = useParams();
    const [ pageSetting, setPageSetting ] = useState({
        fontSize: 1,
    })
    let blog = {};
    if(blogs){
        console.log(blogs);

        blog = blogs.find((blog) => blog.id == id);
    }

    const settingsTooltip = () => {
        return (
          <React.Fragment>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.85)",
                color: "#000",
                fontWeight: 600,
                borderRadius: "20px",
                boxShadow: "0px -4px 21px 2px rgba(0, 0, 0, 0.16)",
                padding: "12px",
              }}
            >
              {`Click me to customize your reading experience!`}
            </Box>
          </React.Fragment>
        );
    }

    const updateSettings = (newSettings) => {
      setPageSetting(newSettings);
    };
    
    return (
      <Layout topMargin={true} appBarStyle={"primary"}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: `${1 * pageSetting.fontSize}em`,
          }}
        >
          {/* Cover Photo */}
          <Grid
            sx={{
              "&::before": {
                content: `''`,
                minHeight: "480px",
                display: "flex",
                marginTop: "-10px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${
                  blog.coverPhoto ? blog.coverPhoto : NoImage
                })`,
                position: "relative",
              },
            }}
          />

          {/* Blog Content */}
          <Grid sx={{ padding: "10px 150px 30px" }}>
            <Typography
              sx={{
                color: "#000000",
                fontSize: "3.75em",
                fontWeight: 700,
                marginBottom: "15px",
                lineHeight: "normal",
              }}
            >
              {blog.title}
            </Typography>
            <Typography sx={{ color: "#000000", fontSize: "1em" }}>
              {blog.excerpt}
            </Typography>

            {/* Author and Date */}
            <Grid
              sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
            >
              <Typography
                sx={{
                  color: "#484848",
                  paddingRight: "10px",
                  fontSize: "1em",
                }}
              >{`By: `}</Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: "1em",
                  textDecoration: "underline",
                }}
              >
                {blog.author}
              </Typography>

              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: 600,
                  margin: "0px 10px",
                  fontSize: "1em",
                }}
              >
                {`•`}
              </Typography>

              <Typography
                sx={{
                  color: "#484848",
                  fontWeight: 600,
                  textDecoration: "underline",
                  fontSize: "1em",
                }}
              >
                {moment(blog.created).format("MMM D, YYYY")}
              </Typography>
            </Grid>

            {/* Content */}
            <Grid sx={{ paddingTop: "20px" }}> {parse(blog.content)} </Grid>
          </Grid>
        </Grid>
        <SettingsFab
          tooltip={settingsTooltip()}
          handleChangedSetting={(newSettings) => updateSettings(newSettings)}
        />
      </Layout>
    );
}