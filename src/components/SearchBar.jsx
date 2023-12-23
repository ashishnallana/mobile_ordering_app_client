import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function SearchBar({ closeFunc }) {
  const [{ filters }, dispatch] = useStateValue();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");

  // setting parameters for search
  const handleSubmit = (e) => {
    e.preventDefault();
    closeFunc();
    const queryParams = new URLSearchParams();
    queryParams.set("q", searchTerm);
    const filtersArr = Object.values(filters);
    queryParams.set("filters", filtersArr.join(","));
    navigate(`/search?${queryParams.toString()}`);
  };

  //  fill in the search box with the query params
  useEffect(() => {
    if (searchParams.get("q")) {
      setsearchTerm(searchParams.get("q"));
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-full">
      <div
        onClick={() => closeFunc()}
        className="h-full w-full  bg-[rgba(0,0,0,0.5)]"
      ></div>
      <div className="absolute top-[70px] right-[50px] bg-white p-5 rounded-lg">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Search mobiles"
            className="p-2 outline-none min-[730px]:w-[500px] max-[650px]:w-[150px] border-solid border-"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-800 text-white h-[40px] w-[40px] hover:bg-black ml-2 rounded-full"
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
