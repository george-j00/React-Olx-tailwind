import React from "react";
import { useAdsList } from "../context/ProductsContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { ads } = useAdsList();
  const { id } = useParams();

  const productDetail = ads.find((product) => product.id === id);

  if (!productDetail) {
    return <div>No product selected.</div>;
  }

  return (
    <div class="container mx-auto h-screen flex flex-col items-center justify-center">
    <div class="w-1/2 flex justify-center">
      <img src={productDetail.imageUrl} alt={productDetail.name} class="w-1/2 h-auto max-h-[300px]" />
    </div>
    <div class="w-1/2 p-4 flex flex-col justify-center items-center mt-4">
      <h2 class="text-2xl font-semibold mb-4">{productDetail.name}</h2>
      <p class="text-lg">Category: {productDetail.category}</p>
      <p class="text-lg">Price: ${productDetail.price}</p>
    </div>
  </div>
  
  
  );
};

export default ProductDetail;
