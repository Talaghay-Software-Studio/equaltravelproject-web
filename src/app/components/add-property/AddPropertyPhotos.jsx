import { Box, Grid, Typography } from "@mui/material";
import MultiplePhotoIcon from '/assets/icons/svg/photo.svg'
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function AddPropertyPhotos(){
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 10,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  });
  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
    return (
      <Grid sx={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}>
        <Typography
          className="title"
          sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "35px" }}
        >
          {`Add some photos of your property`}
        </Typography>
        <Typography
          sx={{
            color: "#484848",
            fontSize: "1rem",
            marginBottom: "25px",
            width: "75%",
          }}
        >{`Upload at least 5 photos to get started. You can add more or make changes later.`}</Typography>
        <Grid sx={{ display: "flex" }}></Grid>
        <Grid sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #9A9A9A",
              borderRadius: "6px",
              padding: "30px",
            }}
          >
            {/* React Dropzone */}
            <section className="container">
              <div
                {...getRootProps({ className: "dropzone" })}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input {...getInputProps()} />
                <img src={MultiplePhotoIcon} />
                <p>{`Drag your photos here, or click to select photos`}</p>
              </div>
              <aside>
                <h4>Files: </h4>
                <aside style={thumbsContainer}>{thumbs}</aside>
              </aside>
            </section>
          </Box>
        </Grid>
      </Grid>
    );
}