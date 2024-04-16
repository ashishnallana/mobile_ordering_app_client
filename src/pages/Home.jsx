import React, { useEffect } from "react";
import CarouselCont from "../components/CarouselCont";
import HomeCard from "../components/HomeComponents/HomeCard";
import { Link } from "react-router-dom";

const Images = [
  "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
  "https://media.gq-magazine.co.uk/photos/6311d3dc674662a71cdbeb64/16:9/w_2560%2Cc_limit/FLIP_HP.jpg",
  "https://i.gadgets360cdn.com/large/iqoo_12_funtouch_os_14_iqoo_1700735088567.jpg",
];

function Home() {
  useEffect(() => {
    document.title = "Mobile Ordering App";
  }, []);

  return (
    <div className="flex flex-col items-center pt-[80px] scroll-y-scroll bg-[#eaeded] overflow-x-hidden">
      {/* carousel */}
      <CarouselCont images={Images} />

      {/* categories */}
      <div className="flex flex-col items-center my-10">
        <h1 className="font-semibold text-2xl my-5 text-center">
          Browse through categories
        </h1>

        {/*  */}
        <div className="flex min-[700px]:space-x-5 max-[700px]:flex-col max-[700px]:space-y-3">
          <Link
            to="/search?q=&filters=none%2Csmartphone%2Cnone%2Cnone%2Cnone"
            className="bg-[white] flex flex-col items-center justify-center w-[200px] h-[200px] rounded-full"
          >
            <img
              className="h-[120px]"
              src="https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg"
              alt=""
            />
            <h3 className="text-sm">Smartphones</h3>
          </Link>
          <Link
            to="/search?q=&filters=none%2Cgaming+phone%2Cnone%2Cnone%2Cnone"
            className="bg-[white] flex flex-col items-center justify-center w-[200px] h-[200px] rounded-full"
          >
            <img
              className="h-[100px]"
              src="https://m.media-amazon.com/images/I/611rQWZa5rL._SX679_.jpg"
              alt=""
            />
            <h3 className="text-sm mt-3">Gaming phones</h3>
          </Link>
          <Link
            to="http://localhost:3000/search?q=&filters=none%2Ccamera+phone%2Cnone%2Cnone%2Cnone"
            className="bg-[white] flex flex-col items-center justify-center w-[200px] h-[200px] rounded-full"
          >
            <img
              className="h-[100px]"
              src="https://m.media-amazon.com/images/I/81kvDo7F0GL._SX679_.jpg"
              alt=""
            />
            <h3 className="text-sm mt-3">Camera phones</h3>
          </Link>
        </div>
      </div>

      {/* top sellers */}
      <h1 className="font-semibold text-2xl mt-5 text-center">
        Our top sellers
      </h1>
      <div className="flex flex-wrap justify-center my-3">
        <HomeCard
          name="Iphone 15 pro"
          image="https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg"
          brand="Apple"
          url="/mobile?q=Apple+iPhone+15+Pro+Max+%28256+GB%29+-+Natural+Titanium&id=6582f2a9512a5a5aa94a6918"
        />
        <HomeCard
          name="Samsung Z flip5"
          image="https://m.media-amazon.com/images/I/71U+YdsvMPL._SX679_.jpg"
          brand="Samsung"
          url="http://localhost:3000/mobile?q=Samsung+Galaxy+Z+Flip5+5G+%28Graphite%2C+8GB+RAM%2C+256GB+Storage%29&id=6582ef2b512a5a5aa94a690c"
        />
        <HomeCard
          name="iQOO 12 5g"
          image="https://m.media-amazon.com/images/I/61JUyx1-SbL._SX679_.jpg"
          brand="iQOO"
          url="/mobile?q=iQOO+12+5G+%28Alpha%2C+12GB+RAM%2C+256GB+Storage%29&id=6582f082512a5a5aa94a6911"
        />
        <HomeCard
          name="iQOO Neo 7 Pro 5G"
          image="https://m.media-amazon.com/images/I/611rQWZa5rL._SX679_.jpg"
          brand="iQOO"
          url="/mobile?q=iQOO+Neo+7+Pro+5G+%28Dark+Storm%2C+12Gb+Ram%2C+256Gb+Storage%29&id=65869a4a14eaa22f00e6bbe1"
        />
      </div>
    </div>
  );
}

export default Home;
