import React from "react";
import Pricing from "./Pricing";
import AddToCart from "./AddToCart";



const RightColumn = (props) => {
  return (
    <div>
      <Pricing price={props.price}
        options={props.options}
        option={props.option}
        images={props.images}
        selectOnChange={props.selectOnChange}
        geekSquad={props.geekSquad}
      />
      <AddToCart images={props.images}
        name={props.name}
        price={props.price}
        option={props.option}
        clicked={props.clicked}
        locationClicker={props.locationClicker}
        location={props.location}
      />
    </div>
  );
};

export default RightColumn;