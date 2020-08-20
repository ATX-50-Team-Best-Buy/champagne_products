import React from "react";

const ImageWrapper = (props) => {
  return (
    <div className="primary-button">
      <img className="primary-image"
        src={props.mainImage}
      />
    </div>
  );
};

export default ImageWrapper;

