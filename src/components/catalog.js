import React from "react";

const Catalog = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$20" },
    { id: 2, name: "Product 2", price: "$30" },
    { id: 3, name: "Product 3", price: "$40" },
  ];

  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <div className="grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
