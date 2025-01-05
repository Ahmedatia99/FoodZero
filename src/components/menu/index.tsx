import React from "react";
import MainSubject from "./../../app/_components/MainSubject";
import AddToCartButton from "../menu/AddToCartButton";

const Menu = () => {
  return (
    <main>
      <MainSubject
        subject={"best ordering"}
        title="That Always Makes You Fall In Love"
        className="flex flex-col justify-center items-center mx-auto gap-3 uppercase font-semibold"
      />
      <AddToCartButton />
    </main>
  );
};

export default Menu;
