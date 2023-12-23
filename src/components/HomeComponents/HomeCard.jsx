import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ url, name, brand, image }) {
  return (
    <Link
      to={url}
      className="flex flex-col items-center m-3 w-[250px] bg-white py-3 rounded-md"
    >
      <img className="h-[200px] mb-3" src={image} alt={name} />
      <h1 className="font-bold">{brand}</h1>
      <h3 className="text-sm">{name}</h3>
    </Link>
  );
}

export default HomeCard;
