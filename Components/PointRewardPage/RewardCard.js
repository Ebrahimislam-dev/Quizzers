import React from "react";
import { useState } from "react";
import rewardicon from "../../Media/icons/RewardIcon2nd.png";
import lockicon from "../../Media/icons/lockIcon.png";
import mediaicon from "../../Media/icons/mediaicon.png";
import PropTypes from "prop-types";
import PointDrawer from "./PointDrawer";
import Image from "next/image";
import styles from "./PointRewardPage.module.css";
const RewardCard = ({ toggleDrawer }) => {
  return (
    <div>
      <div className={`mx-5 ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-4 ">
          <div>
            <Image src={rewardicon} alt="rewardicon" />
          </div>
          <div>
            <p className="text-sm font-medium ">মোবাইল রিচার্জ ২০ টাকা </p>
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
            <button className={`text-white ${styles.collectionBtn}`}>সংগ্রহ করুন</button>
          </div>
        </div>
      </div>
      <div className={`mx-5 ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-4 ">
          <div>
            <Image src={lockicon} alt="lockicon" />
          </div>
          <div>
            <p className="text-sm font-medium ">মোবাইল রিচার্জ ৫০ টাকা </p>
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
      <div className={`mx-5 ${styles.rewardCard}`}>
        <div className="flex items-center justify-between py-4 ">
          <div>
            <Image src={mediaicon} alt="mediaicon" />
          </div>
          <div>
            <p className="text-sm font-medium ">যেভাবে কাজ করে </p>
            <p
              style={{
                color: " #666666",
                opacity: "0.55",
                fontSize: " 12px",
                lineHeight: "20px",
              }}
            >
              বিস্তারিত দেখতে ক্লিক করুন
            </p>
          </div>
          <div>
            <button className={`text-white ${styles.collectionBtn}`}>
              ভিডিও দেখুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
