import React from "react";

import prizeicon from "../../Media/icons/prize_hires 1.png";
import Image from "next/image";
import styles from "./PointRewardPage.module.css";
const RewardHeader = () => {
  return (
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
      <div className=" bg-white py-1 mx-8 rounded-3xl my-3 "></div>
      <div>
        <p className=" text-xs font-normal text-center px-11 pb-6">
          পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না
        </p>
      </div>
    </div>
  );
};

export default RewardHeader;
