import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductItem from "../../components/BestSellingProduct/ProductItem/ProductItem";
import Navigationbar from "../../components/Navbar/Navigationbar";
import Footer from "../../components/Footer/Footer";

const AllProducts = () => {
  const [productsFromApi, setProductsFromApi] = useState([{}]);

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

  useEffect(() => {
    getAllProductsApi();
  }, []);

  return (
    <>
      <Navigationbar darkNavbar />
      <Container>
        <Row>
          {productsFromApi.map((product: any, index: any) => (
            <Col lg={3} sm={6}>
              <div key={index}>
                <ProductItem
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  manufacturer={product.manufacturer}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AllProducts;
