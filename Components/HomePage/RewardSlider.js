import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caruselimage from "../../Media/images/caruselimage.png";
import Image from "next/image";
import style from "./HomePage.module.css";

const RewardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    customPaging: (i) => (
      <div
        className="text-3xl font-bold "
        style={{
          color: "#4C67AD",
        }}
      >
        <ul>. </ul>
      </div>
    ),
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className={`${style.sliderContent} `}>
          <Image
            className=" w-44 h-36 "
            src={caruselimage}
            alt="caruselimage"
          />
          <div className=" text-right ">
            <h1
              className=" font-semibold text-xl "
              style={{ color: "#4C67AD" }}
            >
              কুইজার্স রিওয়ার্ড
            </h1>
            <p className=" font-medium text-xs ">
              অর্জন করে লুফে নাও দারুন সব <br />
              আকর্ষণীয় অফার
            </p>
            <button
              className=" text-xs font-medium text-white px-5 py-1 mt-1"
              style={{ background: "#6A5AE0", borderRadius: " 20px" }}
            >
              ক্লিক কর
            </button>
          </div>
        </div>
        <div className={`${style.sliderContent} `}>
          <Image
            className=" w-44 h-36 "
            src={caruselimage}
            alt="caruselimage"
          />
          <div className=" text-right ">
            <h1
              className=" font-semibold text-xl "
              style={{ color: "#4C67AD" }}
            >
              কুইজার্স রিওয়ার্ড
            </h1>
            <p className=" font-medium text-xs ">
              অর্জন করে লুফে নাও দারুন সব <br />
              আকর্ষণীয় অফার
            </p>
            <button
              className=" text-xs font-medium text-white px-5 py-1 mt-1"
              style={{ background: "#6A5AE0", borderRadius: " 20px" }}
            >
              ক্লিক কর
            </button>
          </div>
        </div>
        <div className={`${style.sliderContent} `}>
          <Image
            className=" w-44 h-36 "
            src={caruselimage}
            alt="caruselimage"
          />
          <div className=" text-right ">
            <h1
              className=" font-semibold text-xl "
              style={{ color: "#4C67AD" }}
            >
              কুইজার্স রিওয়ার্ড
            </h1>
            <p className=" font-medium text-xs ">
              অর্জন করে লুফে নাও দারুন সব <br />
              আকর্ষণীয় অফার
            </p>
            <button
              className=" text-xs font-medium text-white px-5 py-1 mt-1"
              style={{ background: "#6A5AE0", borderRadius: " 20px" }}
            >
              ক্লিক কর
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default RewardSlider;
