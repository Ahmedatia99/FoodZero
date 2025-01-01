import React from "react";
import MenuItem from "./MenuItem";
const AddToCartButton = () => {
  const products = [
    {
      id: 1,
      img: "/assets/images/pizza.png",
      title: "Margherita Pizza",
      description: "Margherita Pizza is available",
      price: 10.99,
    },
    {
      id: 2,
      img: "/assets/images/pizza.png",
      title: "Margherita Pizza",
      description: "Margherita Pizza is available",
      price: 10.99,
    },
    {
      id: 3,
      img: "/assets/images/pizza.png",
      title: "Margherita Pizza",
      description: "Margherita Pizza is available",
      price: 10.99,
    },
    {
      id: 4,
      img: "/assets/images/hero-pizza.png",
      title: "Margherita Pizza",
      description: "Margherita Pizza is available",
      price: 10.99,
    },
  ];
  return (
    <section>
      <div className="mt-20">
        <ul className="grid grid-cols-3 max-sm:grid-cols-1 gap-10">
          {products.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AddToCartButton;
