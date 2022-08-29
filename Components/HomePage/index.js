import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import googlilicon from "../../Media/icons/Atom Bulb.png";
import bangladesicon from "../../Media/icons/bangladeshflag.png";
import infoicon from "../../Media/icons/Books and Apple.png";
import entertainmenticon from "../../Media/icons/entertainment.png";
import globalicon from "../../Media/icons/Globe.png";
import sporticon from "../../Media/icons/Medal.png";
import Header from "./Header";
import style from "./HomePage.module.css";
import RewardSlider from "./RewardSlider";

const HomePage = () => {
  return (
    <div className={`${style.homepage} `}>
      <section>
        <Header></Header>
      </section>
      <section>
        <div className="px-3 mt-14 ">
          <RewardSlider></RewardSlider>
        </div>
      </section>
      <section className="pb-16 sm:pb:2">
        <div className="flex items-center justify-between pl-6 pr-6 cursor-pointer pt-9">
          <p className="text-base 2xl:text-lg font-semibold leading-5 ">
            কুইজ ক্যাটাগরি পছন্দ করুন
          </p>
          {/* <Image className="" src={righticonBlack} alt="icon" /> */}
          {/* <ArrowForwardIosIcon /> */}
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
        <div className="grid grid-cols-3 pt-5 pb-24  gap-4 mx-5 ">
          <Link href="sportQuiz">
            <a>
              <div className={style.category}>
                <div className=" w-14 h-14">
                  <Image src={sporticon} alt="sporticon" />
                </div>
                <p>খেলাধুলা</p>
              </div>
            </a>
          </Link>
          <Link href="sportQuiz">
            <a>
              <div className={style.category}>
                <div className=" w-14 h-14">
                  <Image src={infoicon} alt="infoicon" />
                </div>

                <p>তথ্যমূলক</p>
              </div>
            </a>
          </Link>
          <Link href="sportQuiz">
            <a>
              <div className={`gap-y-2 ${style.category}`}>
                <div className=" w-12 h-12">
                  <Image src={googlilicon} alt="googlilicon" />
                </div>

                <p>গুগলি</p>
              </div>
            </a>
          </Link>
          <Link href="bdquiz">
            <a>
              <div className={style.category}>
                <div className=" w-14 h-14">
                  <Image src={globalicon} alt="globalicon" />
                </div>

                <p>আন্তর্জাতিক</p>
              </div>
            </a>
          </Link>
          <Link href="bdquiz">
            <a>
              <div className={`gap-y-2 ${style.category}`}>
                <div className=" w-12 h-12 mb-1">
                  <Image src={bangladesicon} alt="bangladesicon" />
                </div>

                <p> বাংলাদেশ</p>
              </div>
            </a>
          </Link>
          <Link href="bdquiz">
            <a>
              <div className={`gap-y-2 ${style.category}`}>
                <div className=" w-12 h-12">
                  <Image src={entertainmenticon} alt="entertainmenticon" />
                </div>

                <p>এন্টারটেইন</p>
              </div>
            </a>
          </Link>
        </div>
      </section>
      {/*   <section className="">
        <div className="w-full ">
          <BottomHeader></BottomHeader>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
