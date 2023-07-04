import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const bottomIcons = [
  {
    name: "bed",
    path: "/src/assets/icons/svg/bed.svg",
    count: 3,
  },
  {
    name: "bath",
    path: "/src/assets/icons/svg/bath.svg",
    count: 2,
  },
  {
    name: "car",
    path: "/src/assets/icons/svg/car.svg",
    count: 1,
  },
  {
    name: "pet",
    path: "/src/assets/icons/svg/pet.svg",
    count: 2,
  },
];
export default function PropertyFocusCard() {
    return (
      <Card sx={{ display: "flex", width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 150 }}
          image="/src/assets/img/properties/1.png"
          alt="Property image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent >
            <Typography className="title" component="div" variant="h5" sx={{ color: "#484848" }}>
              {`Lorem Ipsum Dolor`}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {`Lorem Ipsum Dolor`}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {bottomIcons.map((icon) => (
                <Grid
                  key={icon.name}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mr: "15px",
                  }}
                >
                  <img src={icon.path} />
                  <span style={{ padding: "0px 5px" }}>{icon.count}</span>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Card>
    );
}