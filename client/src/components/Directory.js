import React from "react";
import Grid from "@material-ui/core/Grid";

const Directory = (props) => {
  return (
    <div>
      <Grid
        id="directory"
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <a href="https://www.bestbuy.com/">Best Buy</a>
        <p> - </p>
        <a href="https://www.bestbuy.com/site/electronics/video-games/abcat0700000.c?id=abcat0700000">
          {props.department}
        </a>
        <p> - </p>
        <a href="https://www.bestbuy.com/site/video-games/nintendo-switch/pcmcat1476977522176.c?id=pcmcat1476977522176">
          {props.subDept}
        </a>
      </Grid>
    </div>
  );
};

export default Directory;
