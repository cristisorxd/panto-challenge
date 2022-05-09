import React, { useEffect, useState } from "react";

import classes from "./Searchbar.module.scss";
import SearchbarCard from "./SearchbarCard";
import SearchIcon from "./SearchIcon";

const Searchbar = () => {
  const [productsFromApi, setProductsFromApi] = useState([{}]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    getAllProductsApi();
  }, []);

  const getAllProductsApi = async () => {
    try {
      const response = await fetch(
        "https://backend-furniture.herokuapp.com/backend/getAllProducts/"
      );
      const data = await response.json();
      setProductsFromApi(data);
      return productsFromApi;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <SearchbarCard query={query} setQuery={setQuery} />
        <SearchIcon />
      </div>
      <div className={classes.productsList}>
        {productsFromApi
          ?.filter((item: any) => {
            if (query === "") {
              return "";
            } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          })
          .map((item: any) => (
            <p key={item.id}>{item.name}</p>
          ))}
      </div>
    </>
  );
};

export default Searchbar;
