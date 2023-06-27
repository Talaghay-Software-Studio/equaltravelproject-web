
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import BackToTopSvg from "../../assets/icons/svg/back-to-top.svg";

const style = {
  position: `fixed`,
  bottom: `80px`,
  right: `40px`,
  zIndex: `99`
};

export default function BackToTop() {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={style}>
        <Fab
          size="medium"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: "white",
            height: "41px",
            width: "41px",
            borderRadius: "0px",
          }}
        >
          <img src={BackToTopSvg} />
        </Fab>
      </div>
    </Zoom>
  );
}