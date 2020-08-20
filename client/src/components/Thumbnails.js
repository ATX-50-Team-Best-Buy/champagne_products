import React from "react";
import Thumbnail from "./Thumbnail"
import Grid from "@material-ui/core/Grid";

const Thumbnails = (props) => {
  return (
    <div className="thumbnails">
      <Grid
        container
        justify="center"
        direction="row">
        {props.images.map(image => {
          return <Thumbnail image={image} key={image}
            thumbnailClicker={props.thumbnailClicker}
          />
        })}
      </Grid>
    </div>
  );
};

export default Thumbnails;