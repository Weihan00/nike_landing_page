// Detail.jsx
import { useParams } from "react-router-dom";
import { products } from "../constants";
import React from "react";

const Detail = () => {
  const { id } = useParams();
  const thisProduct = products.find((prod) => prod.id === id);

  return (
    <div className="flex flex-col text-3xl items-center justify-center h-full  text-center  py-8">
      <p className="mb-4">This is {thisProduct.name}</p>
      <img src={thisProduct.imgURL} alt="" 
      className="w-full max-w-md mb-4"
      />
      <p className="text-xl mb-8 text-coral-red">{thisProduct.price}</p>

    </div>
  );
};

export default Detail;
