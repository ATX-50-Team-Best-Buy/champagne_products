import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';




const ProductInfo = (props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid id="left-column" item xs={8}>
          <LeftColumn
            name={props.name}
            brand={props.brand}
            sku={props.sku}
            avgRating={props.avgRating}
            images={props.images}
            mainImage={props.mainImage}
            thumbnailClicker={props.thumbnailClicker}
          />
        </Grid>
        <Grid id="right-column" item xs={4}>
          <RightColumn
            name={props.name}
            price={props.price}
            options={props.options}
            option={props.option}
            images={props.images}
            selectOnChange={props.selectOnChange}
            clicked={props.clicked}
            geekSquad={props.geekSquad}
            locationClicker={props.locationClicker}
            location={props.location}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
