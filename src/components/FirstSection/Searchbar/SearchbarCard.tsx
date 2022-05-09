import React from "react";

import classes from "./SearchbarCard.module.scss";

interface IProps {
  query: string;
  setQuery: (e: string) => void;
}

const SearchbarCard = (props: IProps) => {
  return (
    <div>
      <input
        className={classes.inputStyle}
        placeholder="Search furniture"
        type="text"
        onChange={(e: any) => {
          props.setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchbarCard;
