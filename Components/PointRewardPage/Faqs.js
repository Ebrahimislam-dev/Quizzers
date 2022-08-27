import React from "react";
import rightarrow from "../../Media/icons/rightarrow.png";
import righticon from "../../Media/icons/righticon.png";
import faq from "../../Media/icons/faq.png";
import condition from "../../Media/icons/condition.png";
import Image from "next/image";
import styles from "./PointRewardPage.module.css";
import Link from "next/link";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Faqs = () => {
  return (
    <div>
      <div className={styles.faqsCard}>
        <div className={` gap-3 ${styles.faqInfo}`}>
          <div style={{ color: "#C8B6E2" }}>
            <ArrowCircleRightRoundedIcon />
          </div>
          <p>নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>
        </div>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <div style={{ color: "#C8B6E2" }}>
            <ArrowCircleRightRoundedIcon />
          </div>
          <p>বিস্তারিত দেখতে আপনার কুইজার্স রিওয়ার্ড এ ট্যাপ করুন</p>
        </div>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <div style={{ color: "#C8B6E2" }}>
            <ArrowCircleRightRoundedIcon />
          </div>
          <p>
            পয়েন্ট ব্যবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন এবং তার সুবিধা উপভোগ
            করুন
          </p>
        </div>
        <div className={`gap-3  ${styles.faqInfo}`}>
          <div style={{ color: "#C8B6E2" }}>
            <ArrowCircleRightRoundedIcon />
          </div>

          <p>
            পরবর্তী রিওয়ার্ড লেভেল এবং দারুন সব অফার আনলক করতে বেশি বেশি পয়েন্ট
            অর্জন করুন
          </p>
        </div>
      </div>
      <div className={`my-6  ${styles.faqsCard}`}>
        <Link href="faqPage">
          <a>
            <div
              className={`gap-3 mr-5 flex justify-between items-center ${styles.faqInfo}`}
            >
              <div className="flex justify-between items-center gap-3">
                <div style={{ color: "#C8B6E2" }}>
                  <HelpOutlineRoundedIcon />
                </div>

                <p className="text-sm 2xl:text-base">সচরাচর জিজ্ঞাসা</p>
              </div>

              <ArrowForwardIosIcon />
            </div>
          </a>
        </Link>
        <Link href="conditionPage">
          <a>
            <div
              className={`gap-3 mr-5 flex justify-between items-center ${styles.faqInfo}`}
            >
              <div className="flex justify-between items-center gap-3">
                <div style={{ color: "#C8B6E2" }}>
                  <DescriptionRoundedIcon />
                </div>
                <p className="text-sm 2xl:text-base">শর্তাবলী</p>
              </div>

              <ArrowForwardIosIcon />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Faqs;
