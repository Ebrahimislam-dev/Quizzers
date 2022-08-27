import React from "react";
import style from "./HomePage.module.css";
import person from "../../Media/icons/Person.png";
import rewardicon from "../../Media/icons/rewardIcon.png";
import Link from "next/link";

import Image from "next/image";
import TropyAnimation from "./TropyAnimation";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
const Header = () => {
  return (
    <div className={`${style.header} `}>
      <div className="flex items-center justify-between px-6 py-9">
        <div className="flex flex-row items-center justify-center gap-3">
          <Link href="/profile">
            <a>
              <Image className="h-10 w-9" src={person} alt="userimage" />
            </a>
          </Link>
          <div className="flex flex-col items-start justify-center ">
            <h4 className="text-base font-semibold text-gray-100">ইশতিয়াক</h4>
            <h6 className="text-xs font-normal text-gray-200">Level-Warrior</h6>
          </div>
        </div>
        <div>
          <Link href="/pointReward">
            <a>
              <div
                className={`flex justify-between  items-center gap-2 p-2   focus:ring-1 focus:ring-gray-100 ${style.rewardBtn}`}
              >
                {/* <Image src={rewardicon} alt="reward icon" /> */}
                <div>
                  <EmojiEventsOutlinedIcon />
                </div>

                <p className="font-medium text-center">রিওয়ার্ড</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className=" w-full z-50 flex justify-center  absolute   ">
        <div
          className={`${style.rewarPointcard} flex items-center justify-between px-5 2xl:px-10 bg-white shadow-md rounded-2xl  py-5`}
        >
          <div>
            <h6
              className="text-xs 2xl:text-sm font-medium leading-5 "
              style={{ color: "#666666", opacity: "0.55" }}
            >
              আপনার লেভেল : Warrior
            </h6>
            <h5 className="text-sm 2xl:text-base font-semibold leading-5 ">
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
    </div>
  );
};

export default Header;
