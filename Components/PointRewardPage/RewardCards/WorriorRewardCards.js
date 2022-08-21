import React from "react";
import { useState } from "react";
import styles from "../PointRewardPage.module.css";
import rewardicon from "../../../Media/icons/RewardIcon2nd.png";
import lockicon from "../../../Media/icons/lockIcon.png";
import Image from "next/image";

const WorriorRewardCards = ({ toggleDrawer }) => {
  return (
    <div className=" mb-10">
      <div className={` ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-3 ">
          <div>
            <Image src={rewardicon} alt="rewardicon" />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">মোবাইল রিচার্জ ২০ টাকা </p>
            <p
              style={{
                color: " #666666",
                opacity: "0.55",
                fontSize: " 12px",
                lineHeight: "20px",
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
        <div className="flex items-center justify-between py-3 ">
          <div>
            <Image src={lockicon} alt="lockicon" />
          </div>
          <div>
            <p className="text-sm font-medium mb-2 ">মোবাইল রিচার্জ ৫০ টাকা </p>
            <p
              style={{
                color: " #666666",
                opacity: "0.55",
                fontSize: " 12px",
                lineHeight: "20px",
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
