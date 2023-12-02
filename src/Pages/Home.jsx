import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap
import { useDispatch } from "react-redux";
import { addToWishlist } from "./redux/slices/wishlistSlice";
import { addToCart } from "./redux/slices/cartSlice";
import axios from "axios";
import ImageCarousel from "../Components/ImageCarousel";

function Home() {
  const [data, setData] = useState([]);
  const [searchItems, setSearchItems] = useState(""); // State for search query
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json"
      )
      .then((response) => {
        console.log("Data:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter data based on search query
  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchItems.toLowerCase())
  );

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="imageSlider">
        <ImageCarousel/>
      </div>
      {/* Search bar */}
      <div className="d-flex justify-content-center mt-3 mb-4">
        <Form>
          <Row >
            <Col xs="auto" className="d-flex justify-content-center align-items-center">
              <Form.Control
              style={{width:'500px'}}
                type="text"
                placeholder="Search product name "
                className=" mr-sm-2 me-3"
                value={searchItems}
                onChange={(e) => setSearchItems(e.target.value)}
              />
                <i class="fa-solid fa-magnifying-glass"></i>
            </Col>
          </Row>
        </Form>
      </div>

      <Row className="ms-5">
        {filteredData.length > 0 ? (
          filteredData.map((product, index) => (
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card
                className="shadow rounded"
                style={{ width: "16rem", height: "23rem" }}
              >
                <Card.Img
                  height={"200px"}
                  variant="top"
                  src={product.picture}
                />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>
                    <h5>${product?.price}</h5>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      onClick={() => dispatch(addToWishlist(product))}
                      className="btn btn-light"
                    >
                      <i className="fa-solid fa-heart text-danger fa-2x"></i>
                    </Button>
                    <Button
                      onClick={() => dispatch(addToCart(product))}
                      className="btn btn-light"
                    >
                      <i className="fa-solid fa-cart-plus text-success fa-2x"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-danger fw-bolder fs-4">
            No matching products found!
          </p>
        )}
      </Row>
    </div>
  );
}

export default Home;
