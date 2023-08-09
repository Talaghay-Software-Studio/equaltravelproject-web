import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function BlogCard(props) {
  const { blog } = props;
  return (
    <Grid sx={{ margin: "20px 20px 20px 0px" }}>
      <Box
        sx={{
          borderRadius: "16px",
          backgroundImage: `url(${blog.thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minWidth: "290px",
          minHeight: "290px",
        }}
      ></Box>
      <Typography
        sx={{
          marginTop: "15px",
          color: "#484848",
          fontWeight: "600",
          fontSize: "1.125em ",
        }}
      >
        {blog.title}
      </Typography>
      {blog.author && (
        <Typography
          sx={{
            marginTop: "5px",
            color: "#9A9A9A",
            fontWeight: "600",
            fontSize: "0.875em ",
          }}
        >
          {blog.author}
        </Typography>
      )}
    </Grid>
  );
}
