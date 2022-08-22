import React from "react";
import { useState } from "react";
import styles from "../PointRewardPage.module.css";
import rewardicon from "../../../Media/icons/RewardIcon2nd.png";
import lockicon from "../../../Media/icons/lockIcon.png";
import Image from "next/image";

import prizeicon from "../../../Media/icons/prize_hires 1.png";
const ChampionRewardCard = ({ toggleDrawer }) => {
  return (
    <div className=" mb-10">
      <div className=" pt-5 pb-7">
        <div className={`${styles.championRewardHeader}  w-full text-white`}>
          <div className=" flex justify-between items-center px-5 py-6  text-base font-medium">
            <h4>ইশতিয়াক আহমেদ</h4>
            <div className="flex justify-between items-center gap-1">
              <Image src={prizeicon} alt="" />
              <p>৪০০০ পয়েন্ট</p>
            </div>
          </div>
          <div className=" text-center">
            <p className=" font-bold text-lg ">Champion</p>
          </div>
          <div className=" bg-white py-1 mx-8 rounded-3xl my-3 "></div>
          <div>
            <p className=" text-xs font-normal text-center px-11 pb-6">
              পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না
            </p>
          </div>
        </div>
      </div>
      <div className="pb-4 pl-3 pr-8">
        <p className="text-base font-medium ">পয়েন্ট রিওয়ার্ড</p>
      </div>
      <div className={` ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-3 ">
          <div>
            <Image src={rewardicon} alt="rewardicon" />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">পাওয়ার ব্যাংক </p>
            <p
              style={{
                color: " #666666",
                opacity: "0.55",
                fontSize: " 12px",
                lineHeight: "20px",
              }}
            >
              ৪০০০ পয়েন্ট
            </p>
          </div>
          <div>
            <button className={`text-white ${styles.collectionBtn}`}>
              সংগ্রহ করুন
            </button>
          </div>
        </div>
      </div>
      <div className={` mt-7 ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-3 ">
          <div>
            <Image src={lockicon} alt="lockicon" />
          </div>
          <div>
            <p className="text-sm font-medium mb-2 ">স্মার্ট ওয়াচ</p>
            <p
              style={{
                color: " #666666",
                opacity: "0.55",
                fontSize: " 12px",
                lineHeight: "20px",
              }}
            >
              ৪০০০ পয়েন্ট
            </p>
          </div>
          <div>
            <button
              onClick={toggleDrawer(true)}
              style={{
                color: "#4F4F4F",
                backgroundColor: "#E0E0E0",
              }}
              className={styles.collectionBtn}
            >
              সংগ্রহ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionRewardCard;
