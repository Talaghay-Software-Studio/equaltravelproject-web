import Layout from "./Layout";
import { Grid, Typography } from "@mui/material";
import BlogCard from "../components/blogs/BlogCard";
import { blogs } from "../../../data/blog.json"
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <Layout topMargin={true} appBarStyle={"primary"}>
      <Grid
        sx={{
          display: "grid",
          padding: "50px 45px",
          gridTemplateColumns: "repeat( auto-fit, minmax(290px, 1fr) )",
        }}
      >
        {blogs.length > 0 &&
          blogs.map((blog, ind) => (
            <Link
              underline="none"
              key={ind}
              to={blog.id.toString()}
              style={{ textDecoration: "none" }}
            >
              <BlogCard blog={blog} />
            </Link>
          ))}
      </Grid>
      <Typography
        sx={{
          paddingBottom: "20px",
          color: "#000",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {`Load more blogs...`}
      </Typography>
    </Layout>
  );
}
