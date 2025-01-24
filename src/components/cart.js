import React from "react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Product 1", quantity: 2, price: "$40" },
    { id: 2, name: "Product 2", quantity: 1, price: "$30" },
  ];

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
