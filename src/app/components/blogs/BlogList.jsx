import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function BlogList(props){
    const { blogs } = props;
    return (
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        {blogs.length > 0 &&
          Array(4)
            .fill(blogs[0])
            .map((blog, ind) => (
              <Grid
                key={ind}
                sx={{ margin: "50px 20px 20px 0px", width: "290px" }}
              >
                <Box
                  sx={{
                    borderRadius: "16px",
                    backgroundImage: `url(${blog.photo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "290px",
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
                  {`“${blog.title}”`}
                </Typography>
              </Grid>
            ))}
      </Grid>
    );
   
}