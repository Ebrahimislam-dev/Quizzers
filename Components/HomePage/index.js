import React from "react";
import Header from "./Header";
import style from "./HomePage.module.css";
import rewardTropy from "../../Media/icons/reward_trophy.png";
import righticonBlack from "../../Media/icons/righticonblack.png";
import sporticon from "../../Media/icons/Medal.png";
import infoicon from "../../Media/icons/Books and Apple.png";
import googlilicon from "../../Media/icons/Atom Bulb.png";
import globalicon from "../../Media/icons/Globe.png";
import bangladesicon from "../../Media/icons/bangladeshflag.png";
import entertainmenticon from "../../Media/icons/entertainment.png";
import RewardSlider from "./RewardSlider";

import Image from "next/image";
import BottomHeader from "../BottomHeader/BottomHeader";
import Link from "next/link";
import TropyAnimation from "./TropyAnimation";

const HomePage = () => {
  return (
    <div className={`${style.homepage} `}>
      <section>
        <Header></Header>
      </section>
      <section>
        <div className="relative pb-10 px-7 ">
          <div className="absolute flex items-center justify-between px-5 bg-white shadow-md w-80 sm:w-64 rounded-2xl -top-20 py-5 ">
            <div>
              <h6
                className="text-xs font-medium leading-5 "
                style={{ color: "#666666", opacity: "0.55" }}
              >
                আপনার লেভেল : Warrior
              </h6>
              <h5 className="text-sm font-semibold leading-5 ">
                রিওয়ার্ড পয়েন্ট : ১৫০০
              </h5>
            </div>
            <div>
              {/* <Image
                className="w-14 h-14 "
                src={rewardTropy}
                alt="Reward Tropy"
              /> */}
              <TropyAnimation />
            </div>
          </div>
        </div>
        <div className="px-3 ">
          <RewardSlider></RewardSlider>
        </div>
      </section>
      <section className="pb-16 sm:pb:2">
        <Link href="packagepage">
          <a>
            <div className="flex items-center justify-between pl-6 pr-10 cursor-pointer pt-9">
              <p className="text-base font-semibold leading-5 ">
                কুইজ ক্যাটাগরি পছন্দ করুন
              </p>
              <Image className="" src={righticonBlack} alt="icon" />
            </div>
          </a>
        </Link>

        <div className="grid grid-cols-3 pt-5 pl-6 pr-5 gap-x-3 gap-y-4 ">
          <div className={style.category}>
            <Image src={sporticon} alt="sporticon" />
            <p>খেলাধুলা</p>
          </div>
          <div className={style.category}>
            <Image src={infoicon} alt="infoicon" />
            <p>তথ্যমূলক</p>
          </div>
          <div className={`gap-y-2 ${style.category}`}>
            <Image src={googlilicon} alt="googlilicon" />
            <p>গুগলি</p>
          </div>
          <div className={style.category}>
            <Image src={globalicon} alt="globalicon" />
            <p>আন্তর্জাতিক</p>
          </div>
          <div className={style.category}>
            <Image src={bangladesicon} alt="bangladesicon" />
            <p> বাংলাদেশ</p>
          </div>
          <div className={`gap-y-2 ${style.category}`}>
            <Image src={entertainmenticon} alt="entertainmenticon" />
            <p>এন্টারটেইন</p>
          </div>
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
