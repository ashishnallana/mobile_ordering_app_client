import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MobileGallery from "../components/MobileGallery";
import Loader from "../components/Loader";
import NumberFormatComponent from "../components/NumberFormatComponent";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useStateValue } from "../StateProvider";

function MobilePage() {
  const [{}, dispatch] = useStateValue();
  const [data, setdata] = useState(null);
  const [searchParams] = useSearchParams();

  // fetch mobile's data
  const getMobile = async (query) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/fetchMobile?${query}`
      );
      if (!response.ok) {
        throw new Error("Some error occured!");
      }
      const mobile = await response.json();
      console.log(mobile);
      setdata(mobile);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: data.mobile[0],
    });
  };

  useEffect(() => {
    getMobile(searchParams.toString());
    document.title = searchParams.get("q");
  }, [searchParams]);

  return (
    <div>
      {data ? (
        <div className="flex max-[800px]:flex-col text-black pt-[100px]">
          {/* Images */}
          <MobileGallery images={data.mobile[0].images} />
          {/* main text */}
          <div className="p-5 mt-5">
            <h3 className="font-bold text-gray-600">{data.mobile[0].brand}</h3>
            <h1 className="text-3xl">{data.mobile[0].name}</h1>

            <h2 className="text-xl mt-5">
              <NumberFormatComponent value={data.mobile[0].price} />
            </h2>
            <p className="mt-3 max-[800px]:w-[400px] max-[500px]:w-auto">
              {data.mobile[0].description}
            </p>
            {/* add to cart btn */}
            <button
              onClick={() => addToCart()}
              className="text-white bg-gray-800 mt-4 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-black"
            >
              <span>Add to</span>
              <LocalMallIcon />
            </button>
            {/* data table*/}
            <TableContainer component={Paper} className="mt-10">
              <Table>
                <TableHead></TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <p className="font-semibold">Brand</p>
                    </TableCell>
                    <TableCell>{data.mobile[0].brand}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <p className="font-semibold">Model</p>
                    </TableCell>
                    <TableCell>{data.mobile[0].name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <p className="font-semibold">OS</p>
                    </TableCell>
                    <TableCell>{data.mobile[0].os}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <p className="font-semibold">Processor</p>
                    </TableCell>
                    <TableCell>{data.mobile[0].processor}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <p className="font-semibold">Memory</p>
                    </TableCell>
                    <TableCell>{data.mobile[0].memory}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MobilePage;
