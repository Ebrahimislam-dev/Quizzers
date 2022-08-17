import React from "react";
import { useState } from "react";
import styles from "./PointRewardPage.module.css";
import RewardHeader from "./RewardHeader";
import lefticon from "../../Media/icons/lefticon.png";

import Link from "next/link";
import RewardCard from "./RewardCard";
import Faqs from "./Faqs";

import PointDrawer from "./PointDrawer";
import Image from "next/image";
import BottomHeader from "../BottomHeader/BottomHeader";
const PointRewardPage = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className={styles.rewardpage}>
      <section className="">
        <Link href="/">
          <a>
            <div className="flex items-center gap-4 px-5 pt-3 ">
              <Image src={lefticon} alt="" />
              <p className="text-2xl font-medium " style={{ color: "#333333" }}>
                পয়েন্ট রিওয়ার্ড
              </p>
            </div>
          </a>
        </Link>
        <div className="px-5 pt-5 pb-7">
          <RewardHeader></RewardHeader>
        </div>
      </section>
      <section style={{ color: "#2C2C2C" }}>
        <div className="flex items-center justify-between pb-4 pl-6 pr-8">
          <p className="text-base font-medium ">পয়েন্ট রিওয়ার্ড</p>
          <p className="text-sm font-normal ">সব দেখুন</p>
        </div>
        <div>
          <RewardCard toggleDrawer={toggleDrawer} />
        </div>
      </section>
      <section className="mb-14 mt-7 ">
        <Faqs></Faqs>
      </section>

      <PointDrawer open={open} toggleDrawer={toggleDrawer} />

 {/*      <section className="">
        <div className="">
          <BottomHeader />
        </div>
      </section> */}
    </div>
  );
};

export default PointRewardPage;
