import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Mobile from "../components/Mobile";
import MobileFilters from "../components/MobileFilters";
import { Dialog } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Loader from "../components/Loader";

function SearchPage() {
  const [data, setdata] = useState(null);
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  // fetch for the mobiles
  const searchProducts = async (query) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/search?${query}`
      );
      if (!response.ok) {
        throw new Error("Some error occured!");
      }
      const mobiles = await response.json();
      console.log(mobiles);
      setdata(mobiles);
    } catch (error) {
      console.error(error.message);
    }
  };

  // handle open/close fr filter's dialog in mobile's
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    searchProducts(searchParams.toString());
    if (searchParams.get("q") !== "") {
      document.title = `Search - ${searchParams.get("q")}`;
    }
  }, [searchParams]);

  return (
    <div className="flex pt-[80px] scroll-y-auto">
      {/* show in desktop screens */}
      <div className="h-[calc(100vh-70px)] overflow-y-scroll pt-[20px] max-[850px]:hidden">
        <MobileFilters />
      </div>
      {/* mobile screen */}
      <button
        onClick={handleClickOpen}
        className="absolute right-3 bg-white px-2 rounded translate-y-2 min-[850px]:hidden"
        style={{
          boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.75)",
          WebkitBoxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.75)",
          MozBoxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.75)",
        }}
      >
        <span>Filters </span>
        <FilterListIcon />
      </button>
      <div className="h-[calc(100vh-70px)] overflow-y-scroll pt-[20px] min-[850px]:hidden">
        <Dialog
          open={open}
          className="min-[850px]:hidden"
          onClose={handleClose}
        >
          <MobileFilters handleClose={handleClose} />
        </Dialog>
      </div>
      {/* search results */}
      {data ? (
        <div className="min-[850px]:flex-1 h-[calc(100vh-70px)] overflow-y-scroll">
          <div>
            {data && data.mobiles.map((e, i) => <Mobile data={e} key={i} />)}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default SearchPage;
