import React from "react";

const Thumbnail = (props) => {
  return (
    <div className="thumbnail" >
      <img className="thumbnail-image"
        src={props.image}
        onMouseOver={props.thumbnailClicker}
      />
    </div>
  );
};

export default Thumbnail;