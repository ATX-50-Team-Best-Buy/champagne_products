import React from "react";
import MediaGallery from "./MediaGallery"
import Grid from "@material-ui/core/Grid";
import StarRatings from 'react-star-ratings'


const LeftColumn = (props) => {
  return (
    <div>
      <div className="title-card">
        <a href="https://www.bestbuy.com/site/nintendo-switch/nintendo-switch-games/pcmcat1484080052161.c?id=pcmcat1484080052161&qp=brand_facet=Brand~Nintendo">{props.brand}</a>
        <h3 id="product-title">{props.name}</h3>
        <Grid
          container
          className="productStats"
          direction="row"
          alignItems="center"
        >
          <strong>Brand:</strong>
          <p>{props.brand}</p>
          <strong>SKU:</strong>
          <p>{props.sku}</p>
        </Grid>
        <Grid
          container
          className="stars"
          direction="row"
          alignItems="center">
          <StarRatings
            rating={props.avgRating}
            starRatedColor="#ffe000"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="0px"
            name="product-rating"
          />
          <p>{props.avgRating}</p>
        </Grid>
      </div>
      <MediaGallery
        images={props.images}
        mainImage={props.mainImage}
        thumbnailClicker={props.thumbnailClicker}

      />
    </div>
  );
};

export default LeftColumn;
