import React from "react";
import ImageWrapper from "./ImageWrapper"
import Thumbnails from "./Thumbnails"
//import Grid from "@material-ui/core/Grid";

const MediaGallery = (props) => {
  return (
    <div>
      <ImageWrapper mainImage={props.mainImage} />
      <Thumbnails images={props.images}
        thumbnailClicker={props.thumbnailClicker}

      />
    </div>
  );
};

export default MediaGallery;
