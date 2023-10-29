import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <>
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <OlxLogo></OlxLogo>
          </div>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" />
            <Arrow></Arrow>
          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <button
            className="bg-red-600 text-white px-5 py-2 rounded-md"
            onClick={logout}
          >
            Logout
          </button>
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <Link to="/sell">
                {" "}
                <SellButtonPlus></SellButtonPlus>
                <span>SELL</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
