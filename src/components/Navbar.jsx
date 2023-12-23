import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import MobileFilters from "./MobileFilters";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchBar from "./SearchBar";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ cart }, dispatch] = useStateValue();
  const [searchbar, setSearchbar] = useState(false);

  const showHideCart = () => {
    dispatch({
      type: "SHOW_HIDE_CART",
    });
  };

  return (
    <div className="bg-[white] w-full text-black flex justify-between items-center px-5 h-[80px] fixed z-10">
      <header>
        <Link to={"/"}>
          <h1 className="text-2xl font-extrabold max-[650px]:text-xl max-[650px]:fnt-bold">
            SMOPP.
          </h1>
        </Link>
      </header>

      {/* some mobile links which show up only in desktop screens */}

      <div className="flex space-x-4 max-[730px]:hidden">
        <Link
          to="/mobile?q=Apple+iPhone+15+Pro+Max+%28256+GB%29+-+Natural+Titanium&id=6582f2a9512a5a5aa94a6918"
          className="text-sm text-gray-600 font-semibold hover:text-black"
        >
          Iphone 15 Pro
        </Link>
        <Link
          to="/mobile?q=Samsung+Galaxy+Z+Flip5+5G+%28Graphite%2C+8GB+RAM%2C+256GB+Storage%29&id=6582ef2b512a5a5aa94a690c"
          className="text-sm text-gray-600 font-semibold hover:text-black"
        >
          Galaxy Z Flip 5
        </Link>
        <Link
          to="/mobile?q=iQOO+12+5G+%28Alpha%2C+12GB+RAM%2C+256GB+Storage%29&id=6582f082512a5a5aa94a6911"
          className="text-sm text-gray-600 font-semibold hover:text-black"
        >
          IQOO 12 5G
        </Link>
        <Link
          to="/mobile?q=OnePlus+11+5G+%28Eternal+Green%2C+16GB+RAM%2C+256GB+Storage%29&id=6582efcf512a5a5aa94a690e"
          className="text-sm text-gray-600 font-semibold hover:text-black"
        >
          ONEPLUS 11
        </Link>
        <Link
          to="/mobile?q=Apple+iPhone+15&id=6582ee46512a5a5aa94a6909"
          className="text-sm text-gray-600 font-semibold hover:text-black"
        >
          Iphone 15
        </Link>
      </div>

      {/* nav icons */}
      <div className="flex space-x-3">
        <button onClick={() => setSearchbar(true)}>
          <SearchIcon />
        </button>
        <button
          onClick={() => {
            showHideCart();
          }}
        >
          <LocalMallIcon />
          <span className="absolute bg-red-500 text-white text-sm font-semibold scale-[0.7] px-[6px] py-[0.5px] rounded-full translate-x-[-80%] translate-y-[70%]">
            {cart.length}
          </span>
        </button>
      </div>

      {/* searchbar */}
      {searchbar && <SearchBar closeFunc={setSearchbar} />}
    </div>
  );
}

export default Navbar;
