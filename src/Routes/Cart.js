import React from 'react';

export default function Cart({ cartProducts, handleAddToCart, handleRemoveFromCart }) {
  // Calculate the total cart value
  const total = cartProducts.reduce((acc, product) => {
    return acc + product.item.cost * product.quantity;
  }, 0);

  return (
    <>
      <div className="container row" style={{ margin: "auto" }}>
        {cartProducts.map((product, index) => (
          <div className="row m-3 col-11" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                style={{ height: "100px", width: "300px", margin: "10px" }}
                src={product.item.pic}
                alt={product.item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.item.name}</h5>
                <h2>Price: {product.item.cost} </h2>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product.item)}
                  >
                    +
                  </button>
                  <button type="button" className="btn btn-primary">
                    {product.quantity}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleRemoveFromCart(product.item)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Cart Value</h1>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            Total Cart Price: {total} Rs.
          </h2>
          <button type="button" className="btn btn-primary">
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
}
