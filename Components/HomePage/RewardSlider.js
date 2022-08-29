import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Media/images/caruselimage.png";
import style from "./HomePage.module.css";
const RewardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    /*  customPaging: (i) => (
      <div
        className="text-3xl font-bold "
        style={{
          color: "#4C67AD",
        }}
      >
        <ul>. </ul>
      </div>
    ), */
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className={`${style.sliderContent} `}>
          <div className=" w-48  ">
            <Image src={caruselimage} alt="caruselimage" />
          </div>

          <div className=" text-right ">
            <h1
              className=" font-semibold text-2xl 2xl:text-3xl "
              style={{ color: "#4C67AD" }}
            >
              কুইজার্স রিওয়ার্ড
            </h1>
            <p className=" font-medium text-xs 2xl:text-sm ">
              অর্জন করে লুফে নাও দারুন সব <br />
              আকর্ষণীয় অফার
            </p>
            <Link href="packagepage">
              <a>
                <button
                  className=" text-xs 2xl:text-sm  font-medium text-white px-5 py-1 mt-1"
                  style={{ background: "#6A5AE0", borderRadius: " 20px" }}
                >
                  ক্লিক কর
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className={`${style.sliderContent} `}>
          <div className=" w-48  ">
            <Image src={caruselimage} alt="caruselimage" />
          </div>

          <div className=" text-right ">
            <h1
              className=" font-semibold text-2xl 2xl:text-3xl "
              style={{ color: "#4C67AD" }}
            >
              কুইজার্স রিওয়ার্ড
            </h1>
            <p className=" font-medium text-xs 2xl:text-sm ">
              অর্জন করে লুফে নাও দারুন সব <br />
              আকর্ষণীয় অফার
            </p>
            <Link href="packagepage">
              <a>
                <button
                  className=" text-xs 2xl:text-sm  font-medium text-white px-5 py-1 mt-1"
                  style={{ background: "#6A5AE0", borderRadius: " 20px" }}
                >
                  ক্লিক কর
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className={`${style.sliderContent} `}>
          <div className=" w-48  ">
            <Image src={caruselimage} alt="caruselimage" />
          </div>

          <div className=" text-right ">
            <h1
              className=" font-semibold text-2xl 2xl:text-3xl "
              style={{ color: "#4C67AD" }}
            >
              কুইজার্স রিওয়ার্ড
            </h1>
            <p className=" font-medium text-xs 2xl:text-sm ">
              অর্জন করে লুফে নাও দারুন সব <br />
              আকর্ষণীয় অফার
            </p>
            <Link href="packagepage">
              <a>
                <button
                  className=" text-xs 2xl:text-sm  font-medium text-white px-5 py-1 mt-1"
                  style={{ background: "#6A5AE0", borderRadius: " 20px" }}
                >
                  ক্লিক কর
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default RewardSlider;
