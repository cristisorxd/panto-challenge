import React from "react";

import images from "../../theme/images";

interface Props {
  count: number;
}

const Star = ({ count }: Props) => {
  return (
    <div>
      {[...Array(count.valueOf())].map((index) => {
        return (
          <span key={index} className="star">
            {" "}
            <img src={images.starIcon} />
          </span>
        );
      })}
    </div>
  );
};

export default Star;
