import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, emptyCart } from "./redux/slices/cartSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };
  const handleCart = () => {
    dispatch(emptyCart());
    alert("Order successfully Placed...Thank you for shopping with us!")
    navigate("/");
  };
  useEffect(() => {
    getCartTotal();
  }, [cartArray]);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {cartArray.length > 0 ? (
          <div className="row mt-5">
            <div className="col-lg-7">
              <table className="table shadow border">
                <thead>
                  <th>QTY</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                </thead>
                <tbody>
                  {cartArray.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        <img
                          width={"150px"}
                          height={"100px"}
                          src={product.picture}
                          alt=""
                        />
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(product._id))}
                          className="btn"
                        >
                          <i className="fa-solid fa-trash text-danger fa-2x"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="border p-3 rounded shadow">
                <h1 className="text-primary">Cart Summary</h1>
                <h4>
                  Total :{" "}
                  <span className="text-danger fw-bolder fs-2">$ {total}</span>
                </h4>
                <div className="d-grid">
                  <button onClick={handleCart} className="btn btn-success mt-5 rounded">
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ height: "60vh" }}
            className="w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <img
              height={"250px"}
              src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif"
              alt=""
            />
            <h3 className="fw-bolder text-primary">Your Wishlist is Empty! 😒</h3>
            <Link className="btn btn-success rounded mt-3" to={"/"}>
              Back to Homepage
            </Link>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2000} theme="colored"/>
    </>
  );
}

export default Cart;
