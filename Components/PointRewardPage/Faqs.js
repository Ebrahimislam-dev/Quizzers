import React from "react";
import rightarrow from "../../Media/icons/rightarrow.png";
import righticon from "../../Media/icons/righticon.png";
import faq from "../../Media/icons/faq.png";
import condition from "../../Media/icons/condition.png";
import Image from "next/image";
import styles from "./PointRewardPage.module.css";
const Faqs = () => {
  return (
    <div>
      <div className={styles.faqsCard}>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <Image src={rightarrow} alt="rightarrow" />
          <p>নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>
        </div>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <Image src={rightarrow} alt="rightarrow" />
          <p>বিস্তারিত দেখতে আপনার কুইজার্স রিওয়ার্ড এ ট্যাপ করুন</p>
        </div>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <Image src={rightarrow} alt="rightarrow" />
          <p>
            পয়েন্ট ব্যবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন এবং তার সুবিধা উপভোগ
            করুন
          </p>
        </div>
        <div className={`gap-3 ${styles.faqInfo}`} >
          <Image src={rightarrow} alt="rightarrow" />
          <p>
            পরবর্তী রিওয়ার্ড লেভেল এবং দারুন সব অফার আনলক করতে বেশি বেশি পয়েন্ট
            অর্জন করুন
          </p>
        </div>
      </div>
      <div className={`my-6 ${styles.faqsCard}`}>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <div className="flex items-start gap-3">
            <Image src={faq} alt="faq" />
            <p className="text-sm">সচরাচর জিজ্ঞাসা</p>
          </div>

          <Image className="pr-5" src={righticon} alt="righticon" />
        </div>
        <div className={`gap-3 ${styles.faqInfo}`}>
          <div className="flex items-start gap-3">
            <Image src={condition} alt="faq" />
            <p className="text-sm">শর্তাবলী</p>
          </div>

          <Image className="pr-5" src={righticon} alt="righticon" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;