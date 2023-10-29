import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Header/Navbar";
import { useAdsList } from "../context/ProductsContext";
import { Link } from "react-router-dom"; // Import Link from React Router


const Home = () => {

  const { ads } =  useAdsList();
  
  return (
    <>
      
        <div>
          <Navbar />
          <Banner />
          <div className="mt-10 w-full">
            <div className="flex flex-row overflow-x-auto overflow-hidden ">
              {ads.map((item, index) => (
                <Link to={`/product/${item.id}`}>
                <div
                  key={index}
                  className="text-center flex-shrink-0 w-72 px-4"
                >
                  <img
                    className="w-60 h-44"
                    src={item.imageUrl}
                    alt="product image"
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">{item.category}</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
};

export default Home;
