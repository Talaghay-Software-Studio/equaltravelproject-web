import { Avatar, Card, CardActions, Grid, IconButton, Typography } from "@mui/material";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import makeStyles from "@mui/styles/makeStyles";

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

const useStyles = makeStyles(() => ({
    paper: {
        borderRadius: "16px 16px 0px 0px !important"
    }
}));
export default function PropertyCard(props){
    const compStyles = useStyles();
    return (
      <Grid
        sx={{
          ...(props.paperShadow && {
            margin: "10px",
            boxShadow: "0px 0px 10px #E5E5E5",
            borderRadius: "15px",
          }),
          ...(!props.paperShadow && { padding: "10px" }),
          ...(props.flexProp && { flex: props.flexProp }),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            height: "360px",
            minWidth: "315px",
            background: `url(${props.bgProp}) no-repeat`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          classes={{ paper: props.paperShadow && compStyles.paper }}
        >
          <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
            {!props.hideFaveIcon && (
              <IconButton aria-label="add to favorites">
                <FavoriteTwoToneIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            )}
          </CardActions>
          <Grid sx={{ display: "flex", mt: "auto", padding: "20px" }}>
            <Avatar
              sx={{ width: 60, height: 60 }}
              src={`${props.avatarProp}`}
              aria-label="property"
            />
            {props.paperShadow && (
              <Grid
                sx={{
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  color: "#FFFFFF",
                }}
              >
                <Typography>{`Listed By:`}</Typography>
                <Typography className="title">{`John Doberman`}</Typography>
                <Typography>{`For: $1000 - $5000`}</Typography>
              </Grid>
            )}
          </Grid>
        </Card>

        <Grid
          sx={{
            ...(props.paperShadow && {
              padding: "0px 20px 10px",
            }),
          }}
        >
          {/* Top Icon/s or Info */}
          <Grid
            sx={{
              pt: "10px",
              ...(props.paperShadow && { paddingLeft: "10px" }),
            }}
          >
            {/* Rating */}
            {props.isRated && (
              <Grid>
                {[...Array(5)].map((rate, ind) => (
                  <span key={ind} style={{ color: "#3B79C9" }}>
                    {ind + 1 <= props.rating ? (
                      <StarRoundedIcon />
                    ) : (
                      <StarOutlineRoundedIcon />
                    )}
                  </span>
                ))}
              </Grid>
            )}

            {/* Pricing */}
            {props.isPriced && (
              <Grid className="title" sx={{ color: "#000000" }}>
                {props.price}
              </Grid>
            )}
          </Grid>

          {/* Prperty name and other text info */}
          <Grid sx={{ pt: "5px" }}>
            <Typography className="title" sx={{ color: "#3B79C9" }}>
              {" "}
              {`Lorem Ipsum Dolor`}{" "}
            </Typography>
            <Typography sx={{ color: "#9A9A9A" }}>
              {" "}
              {`Lorem Ipsum Dolor`}{" "}
            </Typography>
          </Grid>

          {/* Bottom icons */}
          {(props.showBottomIcons || props.isPriced) && (
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
                    mr: "5px",
                  }}
                >
                  <img src={icon.path} />
                  <span style={{ padding: "0px 5px" }}>{icon.count}</span>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Note for Search only */}
          {props.showBottomIcons && (
            <Grid sx={{ color: "#9A9A9A", py: "10px" }}>
              {`Apartment for Rent  |  For Long Period: 1-2 Years`}
            </Grid>
          )}
        </Grid>
      </Grid>
    );
}