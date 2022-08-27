import React from "react";

import prizeicon from "../../Media/icons/prize_hires 1.png";
import Image from "next/image";
import styles from "./PointRewardPage.module.css";
import BorderLinearProgress from "../HomePage/Quiz/BorderLinearProgress";
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
      <div className="  mx-8 my-3 ">
        <BorderLinearProgress value={1200} height={12} />
      </div>
      <div>
        <p className=" text-x 2xl:text-sm s font-normal text-center px-11 pb-6">
          পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না
        </p>
      </div>
    </div>
  );
};

export default RewardHeader;
