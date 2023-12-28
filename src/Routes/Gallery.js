import React, { useState } from 'react';

export default function Gallery({ productItems, handleAddtoCart }) {
  const [addedItems, setAddedItems] = useState([]); // Maintain a state for added items

  const handleAddToCart = (product) => {
    handleAddtoCart(product); // Call the parent component's add to cart function
    setAddedItems((addedItems) => [...addedItems, product.id]); // Add the product's ID to the added items state
  };

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img style={{ height:"450px"}} src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img style={{ height:"450px"}} src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img style={{ height:"450px"}} src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      <div className="row container" style={{ margin: "auto" }}>
        {productItems.map((product) => (
          <div className="card col-5" style={{ margin: "25px" }} key={product.id}>
            <img
              src={product.pic}
              className="card-img-top"
              style={{ padding: 10, height: 200 }}
              alt="mobile"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                Some quick example text to build on the Product Name and make up the bulk of the card's content.
              </p>
              <h2>Price: {product.cost}</h2>
              {addedItems.includes(product.id) ? ( // Check if the product is in the added items state
                <button className="btn btn-success" disabled>
                  Added to Cart
                </button>
              ) : (
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
