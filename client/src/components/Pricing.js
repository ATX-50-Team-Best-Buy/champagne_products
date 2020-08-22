import React from "react";
import Grid from "@material-ui/core/Grid";
import PolicyIcon from "@material-ui/icons/Policy"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

// container for links, product price, options drop-down menu, and geek-squad checkbox
const Pricing = (props) => {

  return (
    <div>
      <div>
        <a href="https://www.bestbuy.com/site/customer-service/price-match-guarantee/pcmcat290300050002.c?id=pcmcat290300050002">Price Match Guarantee</a>
      </div>
      <div>
        <h1 id="price">${props.price}</h1>
      </div>
      <FormControl variant="outlined" id="mlc-options">
        <InputLabel id="options-label">Options</InputLabel>
        <Select
          labelId="options-select"
          id="demo-simple-select-outlined"
          value={props.option}
          onChange={props.selectOnChange}
          label="Options"
        >
          {props.options.map(option => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })}
        </Select>
      </FormControl>
      <div id="protection">
        <Grid
          container
          className="protection"
        >
          <PolicyIcon id="shield" />
          <strong id="protect">Protect your Purchase</strong>
        </Grid>
        <Grid container alignItems="center">
          <Checkbox onClick={props.geekSquad} color="default" />
          <p>2-year Geek Squad Product Replacement</p>
        </Grid>
        <p id="protection-price">$9.99</p>
        <a id="learnMore" href="https://www.bestbuy.com/site/geek-squad-protection/product-replacement-plan/pcmcat281800050012.c?id=pcmcat281800050012">Learn More</a>
      </div>
    </div>
  );
};

export default Pricing;