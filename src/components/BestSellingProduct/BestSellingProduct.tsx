import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./BestSellingProduct.module.scss";
import strings from "../../theme/strings";
import ProductItem from "./ProductItem/ProductItem";
import Carousel from "../Testimonials/Carousel";

const BestSellingProduct = () => {
  const [product, setProduct] = useState<any>([]);
  const [cartIndex, setCartIndex] = useState<number>(0);
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    fetchCategory();
    fetchProduct("Chairs");
  }, []);

  const fetchCategory = async () => {
    const response = await fetch(
      "https://backend-furniture.herokuapp.com/backend/getCategories/"
    );
    const responseData = response.json().then((data) => setCategory(data));
    console.log(category, "category");
  };

  const fetchProduct = async (category: string) => {
    const response = await fetch(
      "https://backend-furniture.herokuapp.com/backend/getProductsByCategory/",
      {
        method: "POST",
        body: JSON.stringify({
          category: category,
        }),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    const responseData = response.json().then((data) => setProduct(data));
    console.log(product);
  };

  const renderCategories = () => {
    return category?.map((item: any, index: number) => {
      return (
        <button key={index} onClick={() => fetchProduct(item.type)}>
          {item.type}
        </button>
      );
    });
  };

  const renderProducts = () => {
    return product?.map((item: any, index: number) => {
      console.log("Item", item);
      if (index >= cartIndex && index < cartIndex + 4)
        return (
          <div key={index}>
            <ProductItem
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              manufacturer={item.manufacturer}
            />
          </div>
        );
    });
  };

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>{strings.bestSellingProduct}</h1>
      <div className={classes.btnGroup}>{renderCategories()}</div>
      <Carousel
        itemsToShow={4}
        itemsLength={product?.length}
        productIndex={cartIndex}
        setProductIndex={setCartIndex}
        testimonialsPage={false}
        items={renderProducts()}
      />
      <Link to="/view-all-products" className={classes.viewAllBtn}>
        View all
      </Link>
    </div>
  );
};

export default BestSellingProduct;
