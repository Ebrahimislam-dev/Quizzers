import React from "react";
import { useState } from "react";
import styles from "../PointRewardPage.module.css";
import rewardicon from "../../../Media/icons/RewardIcon2nd.png";
import lockicon from "../../../Media/icons/lockIcon.png";
import Image from "next/image";
import RewardHeader from "../RewardHeader";
import prizeicon from "../../../Media/icons/prize_hires 1.png";
import BorderLinearProgress from "../../HomePage/Quiz/BorderLinearProgress";
const WorriorRewardCards = ({ toggleDrawer }) => {
  return (
    // {!categoryRef.current ? "Add New Surah" : "Update Surah"}
    <div className=" mb-10">
      <div className=" pt-5 pb-7">
        <div className={`${styles.rewardHeader}  w-full text-white`}>
          <div className=" flex justify-between items-center px-5 py-6  text-base font-medium">
            <h4>ইশতিয়াক আহমেদ</h4>
            <div className="flex justify-between items-center gap-1">
              <Image src={prizeicon} alt="" />
              <p>১২০০ পয়েন্ট</p>
            </div>
          </div>
          <div className=" text-center">
            <p className=" font-bold text-lg ">Warrior</p>
          </div>
          <div className="  mx-8  my-3 ">
            <BorderLinearProgress value={1200} height={10} />
          </div>

          <div>
            <p className=" text-xs 2xl:text-sm  font-normal text-center px-11  mt-1">
              পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না
            </p>
          </div>
        </div>
      </div>
      <div className="pb-4 pl-3 pr-8">
        <p className="text-base font-medium ">পয়েন্ট রিওয়ার্ড</p>
      </div>
      <div className={` ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-3 2xl:px-5 ">
          <div>
            <Image src={rewardicon} alt="rewardicon" />
          </div>
          <div>
            <p className="text-sm 2xl:text-base font-medium mb-2">
              মোবাইল রিচার্জ ২০ টাকা{" "}
            </p>
            <p
              className=" text-xs 2xl:text-sm"
              style={{
                color: " #666666",
                opacity: "0.55",
              }}
            >
              ১০০০ পয়েন্ট
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
        <div className="flex items-center justify-between py-3 2xl:px-5 ">
          <div>
            <Image src={lockicon} alt="lockicon" />
          </div>
          <div>
            <p className="text-sm 2xl:text-base font-medium mb-2 ">
              মোবাইল রিচার্জ ৫০ টাকা{" "}
            </p>
            <p
              className=" text-xs 2xl:text-sm"
              style={{
                color: " #666666",
                opacity: "0.55",
              }}
            >
              ১৫০০ পয়েন্ট
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

export default WorriorRewardCards;
