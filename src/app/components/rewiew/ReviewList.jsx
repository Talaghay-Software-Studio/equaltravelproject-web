import { Divider, Grid, Typography } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import moment from "moment";

export default function ReviewList(props){
    const { reviews } = props;

    const formatDate = (date) => {
        return moment(date).format("MMM D, YYYY");
    }
    return (
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        {reviews.map((review, index) => (
          <Grid key={review.id} sx={{ paddingTop: "20px" }}>
            <Typography
              sx={{
                textDecoration: "underline",
                color: "#484848",
                fontSize: "1.125em",
                fontWeight: "600",
              }}
            >
              {review.title}
            </Typography>

            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              {/* Rating */}
              <Grid sx={{ marginRight: "10px" }}>
                {[...Array(5)].map((rate, ind) => (
                  <span key={ind} style={{ color: "#3B79C9" }}>
                    {ind + 1 <= review.rating ? (
                      <StarRoundedIcon />
                    ) : (
                      <StarOutlineRoundedIcon />
                    )}
                  </span>
                ))}
              </Grid>
              <Typography
                sx={{
                  color: "#484848",
                  fontSize: "0.938em",
                  fontWeight: "600",
                  marginRight: "5px",
                }}
              >{`${review.rating}.0`}</Typography>
              <Typography sx={{}}>
                {`${formatDate(review.startDate)} - ${formatDate(
                  review.endDate
                )}`}
              </Typography>
            </Grid>
            <Typography
              sx={{ color: "#484848", fontStyle: "italic", fontWeight: "600" }}
            >{`“${review.content}”`}</Typography>
            {index < reviews.length - 1 && (
              <Divider
                orientation="horizontal"
                variant="middle"
                flexItem
                sx={{ color: "#9A9A9A", margin: "30px 0px 0px" }}
              />
            )}
          </Grid>
        ))}
        {reviews.length == 0 && (
            <Typography sx={{
                flexDirection: "row",
                borderRadius: "10px",
                color: "#9A9A9A",
                fontSize: "1.125em",
                fontWeight: "700"}}>
                {`No reviews to display.`}
            </Typography>
        )}
      </Grid>
    );
}