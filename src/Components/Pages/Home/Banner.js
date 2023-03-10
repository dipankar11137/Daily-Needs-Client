import React from "react";
import "../../CSS/Banner.css";
import airpot from "../../Images/Banner/airpot-1.jpg";
import laptop from "../../Images/Banner/laptop.jpg";
import iPad from "../../Images/Banner/ipad-1.jpg";
import "../../CSS/PicStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <Slider className="pt-1" {...settings}>
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full rounded-2xl"
          src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png"
          alt=""
        />
        {/* <div className="absolute1 flex flex-col  justify-start">
          <div>
            <p className="heroP text-lime-200 ">
              {" "}
              City<span className="text-orange-300">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">MackBook Pro</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div> */}
      </div>
      <div div className="relative    w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://www.posist.com/restaurant-times/wp-content/uploads/2019/08/delivery.jpg"
          alt=""
        />
        {/* <div className="absolute1 flex flex-col  justify-start">
          <div className="mt-36">
            <p className="heroP text-lime-500 ">
              {" "}
              City<span className="text-orange-500">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">EarPot V4</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div> */}
      </div>
      <div div className="relative   w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://www.mawbiz.com.bd/application/views/module/product_image/city-home-cleaning-service_1.jpg"
          alt=""
        />
        {/* <div className="absolute1 flex flex-col  justify-start">
          <div>
            <p className="heroP text-lime-500 ">
              {" "}
              City<span className="text-orange-500">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">iPad Pro</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div> */}
      </div>
    </Slider>
  );
};

export default Banner;
