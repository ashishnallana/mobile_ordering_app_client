import React from "react";
import { useNavigate } from "react-router-dom";
import NumberFormatComponent from "./NumberFormatComponent";

function Mobile({ data }) {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const openProduct = () => {
    queryParams.set("q", data.name);
    queryParams.set("id", data._id);
    navigate(`/mobile?${queryParams.toString()}`);
  };

  return (
    <div className="pr-5 pb-3 cursor-pointer" onClick={openProduct}>
      <hr />

      <div className="flex items-center mt-3">
        <img
          src={data.coverImg}
          alt={data.name}
          className="h-[250px] max-[550px]:h-[150px]"
        />
        <div>
          <h4 className="font-semibold">{data.brand}</h4>
          <h3>{data.name}</h3>
          <h2 className="text-lg mt-2">
            <NumberFormatComponent value={data.price} />
          </h2>
          <p className="text-sm mt-2 max-[550px]:hidden">
            {truncateText(data.description, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
